import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';

function CamScreen({ publisher, subscribers }) {
  const [imageOn, setImageOn] = useState('');

  const handleClickKillVote = (id) => {
    setImageOn(id);
  };

  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <div>
          <UserVideoComponent streamManager={publisher} />
        </div>
      ) : null}
      {subscribers.map((sub) => (
        <div
          key={sub.stream.streamId}
          onClick={() => {
            handleClickKillVote(sub.stream.streamId);
          }}
        >
          {imageOn === sub.id ? <S.KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}
          <S.VideoComponent>
            <UserVideoComponent streamManager={sub.stream} />
            <S.UserId>{sub.id}</S.UserId>
          </S.VideoComponent>
        </div>
      ))}
    </S.VideoWrapper>
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
          <S.CustomScreen autoPlay={true} ref={videoRef} />
          {/* <p>{getNicknameTag()}</p> */}
        </div>
      ) : null}
    </div>
  );
}

export default CamScreen;
