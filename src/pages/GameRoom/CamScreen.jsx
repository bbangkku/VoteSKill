import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  CustomScreen,
  Day,
  JoinInput,
  KillVote,
  UserId,
  VideoComponent,
  VideoWrapper,
  VoteImage,
} from './CamScreen.Style';

function CamScreen({ sessionId, openvidu }) {
  const [imageOn, setImageOn] = useState('');

  const handleClickKillVote = (id) => {
    setImageOn(id);
  };

  return (
    <div>
      {openvidu.session !== undefined ? (
        <VideoWrapper>
          {openvidu.publisher !== undefined ? (
            <div>
              <UserVideoComponent streamManager={openvidu.publisher} />
            </div>
          ) : null}
          {openvidu.subscribers.map((sub) => (
            <div
              key={sub.stream.streamId}
              onClick={() => {
                handleClickKillVote(sub.stream.streamId);
              }}
            >
              {imageOn === sub.id ? <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}
              <VideoComponent>
                <UserVideoComponent streamManager={sub.stream} />
                <UserId>{sub.id}</UserId>
              </VideoComponent>
            </div>
          ))}
        </VideoWrapper>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const videoRef = useRef();

  const getNicknameTag = () => {
    return JSON.parse(props.connection.data).clientData;
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      console.log(props);
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div>
          <CustomScreen autoPlay={true} ref={videoRef} />
          {/* <p>{getNicknameTag()}</p> */}
        </div>
      ) : null}
    </div>
  );
}

export default CamScreen;
