import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import { CustomScreen, JoinInput, KillVote, VoteImage } from './CamScreen.Style';
import useOpenVidu from 'hooks/useOpenVidu';

function CamScreen({ sessionId }) {
  const { session, publisher, subscribers, setRoomId, setUserName, joinSession } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    setRoomId(sessionId);
    setUserName(nickname);
    
    joinSession();
  }, [sessionId]);

  const [image, setImage] = useState(false);

  const imageOn = () => {
    setImage(!image);
  };

  return (
    <div>
      {session !== undefined ? (
        <div>
          {/* <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> */}
          {/* <button onClick={imageOn}></button> */}
          {subscribers.map((sub) => (
            <div key={sub.stream.streamId}>
              <span>{sub.id}</span>
              <UserVideoComponent streamManager={sub} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const getNicknameTag = () => {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div>
          <OpenViduVideoComponent streamManager={props.streamManager} />
          <p>{getNicknameTag()}</p>
        </div>
      ) : null}
    </div>
  );
}

function OpenViduVideoComponent(props) {
  const videoRef = useRef();

  useEffect(() => {
    if (props && !!videoRef.current) {
      console.log(videoRef.current);
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, []);

  return <CustomScreen autoPlay={true} ref={videoRef}></CustomScreen>;
}

export default CamScreen;
