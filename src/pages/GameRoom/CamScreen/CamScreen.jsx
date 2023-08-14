import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState } from 'recoil';
import { isSkillTimeState, isVoteTimeState, roomName } from 'recoil/atoms/gameState';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
import { axiosInstance } from 'apis';
import Swal from 'sweetalert2';

function CamScreen({ publisher, subscribers }) {
  const [imageOn, setImageOn] = useState('');

  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <UserVideoComponent streamManager={publisher} setImageOn={setImageOn} imageOn={imageOn} />
      ) : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <UserVideoComponent key={sub.stream.streamId} streamManager={sub} setImageOn={setImageOn} imageOn={imageOn} />
        ))}
    </S.VideoWrapper>
  );
}

function UserVideoComponent(props) {
  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);
  const videoRef = useRef();

  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  const handleClickKillVote = (sub) => {
    if (isVoteTime || isSkillTime) {
      props.setImageOn(getNicknameTag(sub));
      const nickname = getNicknameTag(sub);
      console.log(props);
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        // showCancelButton: false,
        // confirmButtonText: '닫기',
      });
      const roomId = props.streamManager.stream.session.sessionId
        ? props.streamManager.stream.session.sessionId
        : props.streamManager.session.sessionId;
      const URL = process.env.REACT_APP_SERVER_URL + `/rooms/${roomId}/vote/${nickname}`;
      axiosInstance.post(URL);
    } else {
      return;
    }
  };

  const checkVote = (sub) => props.imageOn === getNicknameTag(sub);

  const resetVote = () => props.setImageOn('');

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <>
      {props.streamManager !== undefined ? (
        <S.UserInfoWrapper>
          {checkVote(props.streamManager) && (
            <S.KillVote
              src={process.env.PUBLIC_URL + '/image/game/killvote.png'}
              onClick={() => resetVote(props.streamManager)}
            />
          )}
          <S.VideoContainer onClick={() => handleClickKillVote(props.streamManager)}>
            <S.CustomScreen autoPlay={true} ref={videoRef} />
          </S.VideoContainer>
          <span>{getNicknameTag(props.streamManager)}</span>
        </S.UserInfoWrapper>
      ) : null}
    </>
  );
}

export default React.memo(CamScreen);
