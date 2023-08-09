import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import { CustomScreen, JoinInput, VoteImage } from './CamScreen.Style';
import useOpenVidu from 'hooks/useOpenVidu';

function CamScreen({ sessionId }) {
  const { session, publisher, subscribers, setRoomId, setUserName, joinSession } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    setRoomId(sessionId);
    setUserName(nickname);
    joinSession();
  }, [sessionId]);

  console.log(session);
  console.log(subscribers.length);

  return (
    <div>
      {/* {session === undefined ? (
        <div>
          <p>참여자가 없습니다.</p>
        </div>
      ) : null} */}

      {session !== undefined ? (
        <div>
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

  // const ImageOn = () => {
  //   return <VoteImage src={process.env.PUBLIC_URL + '/image/game/killvote.png'}></VoteImage>;
  // };

  return (
    <div>
      {/* <VoteImage src={process.env.PUBLIC_URL + '/image/game/killvote.png'}></VoteImage> */}
      <CustomScreen autoPlay={true} ref={videoRef}></CustomScreen>
    </div>
  );
}

// function Vote() {
//   const { subscribers } = useOpenVidu();

//   return (
//     <div>
//       {subscribers.map((sub) => (
//         <div key={sub.stream.streamId} onClick={() => this.handleMainVideoStream(sub)}></div>
//       ))}
//     </div>
//   );
// }

export default CamScreen;
