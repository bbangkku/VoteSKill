import React, { useEffect, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import * as S from 'pages/GameRoom/CamScreen.Style';

function CamScreen() {
  const [OV, setOV] = useState();
  const [initUserData, setInitUserData] = useState({
    mySessionId: 'JungInLee0130',
    myUserName: 'amongus',
  });
  const [publisher, setPublisher] = useState();
  const [subscribers, setSubscibers] = useState([]);
  const [session, setSession] = useState();
  const [mainStreamManager, setMainStreamManager] = useState(undefined);

  // useEffect(() => {
  //   // OpenVidu 서버 URL 및 토큰을 받아옵니다.
  //   // 실제 프로젝트에서는 서버를 통해 토큰을 발급해야 합니다.
  //   //const OPENVIDU_SERVER_URL = 'YOUR_OPENVIDU_SERVER_URL';
  //   //const OPENVIDU_SERVER_SECRET = 'YOUR_OPENVIDU_SERVER_SECRET';
  //   const TOKEN = createToken(initUserData.mySessionId);

  //   // OpenVidu 세션 생성
  //   const ov = new OpenVidu();
  //   const newSession = ov.initSession();

  //   // 세션 이벤트 핸들러 설정
  //   newSession.on('streamCreated', (event) => {
  //     // 새로운 스트림이 생성되었을 때 처리하는 로직
  //     const subscriber = newSession.subscribe(event.stream, 'subscriber');
  //   });

  //   // OpenVidu 세션에 연결합니다.
  //   newSession
  //     .connect(TOKEN, { clientData: 'user-agent' })
  //     .then(() => {
  //       setSession(newSession);
  //     })
  //     .catch((error) => {
  //       console.error('Error connecting to OpenVidu', error);
  //     });

  //   // 언마운트될 때 세션을 종료합니다.
  //   return () => {
  //     newSession.disconnect();
  //   };
  // }, []);

  // // Publish 버튼을 누르면 로컬 스트림을 생성하고 발행합니다.
  // const handlePublish = () => {
  //   const publisher = session.initPublisher('publisher');
  //   session.publish(publisher);
  //   setPublisher(publisher);
  // };

  // // Unpublish 버튼을 누르면 로컬 스트림을 제거합니다.
  // const handleUnpublish = () => {
  //   session.unpublish(publisher);
  //   setPublisher(null);
  // };

  const joinSession = () => {
    const newOV = new OpenVidu();

    newOV.enableProdMode();

    const newSession = newOV.initSession();

    setOV(newOV);
    setSession(newSession);

    const connection = async () => {
      getToken().then((token) => {
        session.session.connect({ token }, {});
      });
      try {
        // 4-a token 생성
        const token = await getToken(initUserData.mySessionId);
        await newSession.connect(token, { clientData: initUserData.myUserName });

        // 4-b user media 객체 생성
        const mediaStream = await newOV.getUserMedia({
          audioSource: false,
          videoSource: undefined,
          resolution: '1280x720',
          frameRate: 10,
        });

        const videoTrack = mediaStream.getVideoTracks()[0];

        const newPublisher = newOV.initPublisher(initUserData.myUserName, {
          audioSource: undefined,
          videoSource: videoTrack,
          publishAudio: true,
          publishVideo: true,
          // resolution: '1280x720',
          // frameRate: 10,
          insertMode: 'APPEND',
          mirror: true,
        });

        // 4-c publish
        newPublisher.once('accessAllowed', () => {
          newSession.publish(newPublisher);
          setInitUserData({ publisher: newPublisher });
        });

        // 1. connection 메소드 내부에 이벤트 수신 처리
        // 1-1 session에 참여한 사용자 추가
        newSession.on('streamCreated', (event) => {
          const newSubscriber = newSession.subscribe(event.stream, undefined);

          const newSubscribers = subscribers;
          newSubscribers.push(newSubscriber);

          setSubscibers(newSubscribers);
        });

        // 1-2 session에서 disconnect한 사용자 삭제
        newSession.on('streamDestroyed', (event) => {
          event.preventDefault();
          deleteSubscriber(event.stream.streamManager);
        });

        // 1-3 예외처리
        newSession.on('exception', (exception) => {
          console.warn(exception);
        });
      } catch (error) {
        console.warn('There was an error connecting to the session:', error.code, error.message);
      }
    };

    connection();
  };

  const getToken = async (sessionId) => {
    return createSession(sessionId).then((sessionId) => createToken(sessionId));
  };

  const createSession = (sessionId) => {
    const data = JSON.stringify({ customSessionId: sessionId });
    return new Promise((resolve, reject) => {
      axios
        .post(`/openvidu/api/sessions`, data)
        .then((response) => {
          resolve(response.data.id);
        })
        .catch((response) => {
          const err = Object.assign({}, response);
          if (err?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' +
                process.env.REACT_APP_OPENVIDU_SERVER_URL,
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  process.env.REACT_APP_OPENVIDU_SERVER_URL +
                  '"\\n\\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  process.env.REACT_APP_OPENVIDU_SERVER_URL +
                  '"',
              )
            ) {
              window.location.assign(process.env.REACT_APP_OPENVIDU_SERVER_URL + '/accept-certificate');
            }
          }
        });
    });
  };

  const createToken = (sessionId) => {
    const data = {};
    return new Promise((resolve, reject) => {
      axios
        .post(`/openvidu/api/sessions/${sessionId}/connection`, data)
        .then((response) => {
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
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

  const UserVideoComponent = (props) => {
    const getNicknameTag = () => {
      return JSON.parse(props.streamManager.stream.connection.data).clientData;
    };

    const handleVideoClicked = () => {
      if (props.mainVideoStream) {
        props.mainVideoStream(props.streamManager);
      }
    };

    const handleMainVideoStream = () => {};

    return (
      <div>
        {subscribers.map((sub, i) => {
          <div key={i} className="stream-container col-md-6 col-xs-6">
            <UserVideoComponent streamManager={sub} mainVideoStream={handleMainVideoStream}></UserVideoComponent>
          </div>;
        })}
        <video
          ref={(videoElement) => {
            props.streamManager.addVideoElement(videoElement);
          }}
          onClick={handleVideoClicked}
          autoPlay={true}
        >
          <p>{getNicknameTag()}</p>
        </video>
      </div>
    );
  };

  return <div>{mainStreamManager && <UserVideoComponent streamManager={mainStreamManager} />}</div>;
}

export default CamScreen;
