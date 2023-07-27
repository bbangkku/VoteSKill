import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import { CustomScreen, JoinInput } from './CamScreen.Style';

function CamScreen() {
  const APPLICATION_SERVER_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
  //const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

  const [OV, setOV] = useState();
  const [initUserData, setInitUserData] = useState({
    mySessionId: 'OPENVIDUAPP',
    myUserName: 'OPENVIDUAPP',
  });
  const [session, setSession] = useState();
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  const [publisher, setPublisher] = useState(undefined);
  const [subscribers, setSubscribers] = useState([]);

  const createSession = async (sessionId) => {
    const response = await axios.post(
      APPLICATION_SERVER_URL + 'api/sessions',
      { customSessionId: sessionId },
      {
        //Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
        headers: { 'Content-Type': 'application/json' },
      },
    );
    return response.data; // The sessionId
  };

  const createToken = async (sessionId) => {
    try {
      const response = await axios.post(
        APPLICATION_SERVER_URL + `api/sessions/${sessionId}/connections`,
        {},
        {
          //Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
          headers: { 'Content-Type': 'application/json' },
        },
      );
      return response.data; // The token
    } catch (error) {
      return null;
    }
  };

  const getToken = async () => {
    const sessionId = await createSession(initUserData.mySessionId);
    console.log('getToken : ' + sessionId);
    return createToken(sessionId);
  };

  const joinSession = async () => {
    const newOV = new OpenVidu();

    newOV.enableProdMode();

    const newSession = newOV.initSession();

    setOV(newOV);
    setSession(newSession);

    // 4. session에 connect하는 과정
    getToken().then((token) => {
      newSession
        .connect(token, { clientData: initUserData.myUserName })
        .then(async () => {
          // 4-b user media 객체 생성
          newOV
            .getUserMedia({
              audioSource: false,
              videoSource: undefined,
              resolution: '300x250',
              frameRate: 10,
            })
            .then((mediaStream) => {
              var videoTrack = mediaStream.getVideoTracks()[0];

              var newPublisher = newOV.initPublisher(initUserData.myUserName, {
                audioSource: undefined,
                videoSource: videoTrack,
                publishAudio: true,
                publishVideo: true,
                //resolution: '500x300',
                // frameRate: 10,
                insertMode: 'APPEND',
                mirror: true,
              });
              // 4-c publish
              newPublisher.once('accessAllowed', () => {
                newSession.publish(newPublisher);
                setPublisher(newPublisher);
              });
            });
        })
        .catch((error) => {
          console.warn('There was an error connecting to the session:', error.code, error.message);
        });
    });
  };

  const deleteSubscriber = (streamManager) => {
    const prevSubscribers = initUserData.subscribers;
    let index = prevSubscribers.indexOf(streamManager, 0);
    if (index > -1) {
      prevSubscribers.splice(index, 1);
      setInitUserData({ subscribers: [...prevSubscribers] });
    }
  };

  const handleMainVideoStream = (stream) => {
    if (mainStreamManager !== stream) {
      setMainStreamManager(stream);
    }
  };

  return (
    <div className="container">
      {session === undefined ? (
        <div id="join">
          <div id="join-dialog" className="jumbotron vertical-center">
            {/* <h1> Join a video session </h1> */}
            <form className="form-group" onSubmit={joinSession}>
              {/* <p>
                <label>Participant: </label>
                <input className="form-control" type="text" id="userName" value={initUserData.myUserName} required />
              </p>
              <p>
                <label> Session: </label>
                <input className="form-control" type="text" id="sessionId" value={initUserData.mySessionId} required />
              </p> */}
              <p className="text-center">
                <JoinInput className="btn btn-lg btn-success" name="commit" type="submit" value="JOIN" />
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {session !== undefined ? (
        <div id="session">
          <div id="video-container" className="col-md-6">
            {publisher !== undefined ? (
              <div className="stream-container col-md-6 col-xs-6" onClick={() => handleMainVideoStream(publisher)}>
                <UserVideoComponent streamManager={publisher} />
              </div>
            ) : null}
            {subscribers.map((sub, i) => (
              <div
                key={sub.stream.streamId}
                className="stream-container col-md-6 col-xs-6"
                onClick={() => this.handleMainVideoStream(sub)}
              >
                <span>{sub.id}</span>
                <UserVideoComponent streamManager={sub} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const getNicknameTag = () => {
    // Gets the nickName of the user
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  return (
    <div>
      {props.streamManager !== undefined ? (
        <OpenViduVideoComponent streamManager={props.streamManager}>{getNicknameTag}</OpenViduVideoComponent>
      ) : null}
    </div>
  );
}

function OpenViduVideoComponent(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (props && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props]);

  return <CustomScreen autoPlay={true} ref={videoRef} />;
}

export default CamScreen;
