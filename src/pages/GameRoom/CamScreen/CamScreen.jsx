import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState } from 'recoil';
import { isSkillTimeState, isVoteTimeState, roomName } from 'recoil/atoms/gameState';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
import { axiosInstance } from 'apis';
import Swal from 'sweetalert2';

function CamScreen({ publisher, subscribers, myRole }) {
  const [imageOn, setImageOn] = useState('');

  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <UserVideoComponent streamManager={publisher} setImageOn={setImageOn} imageOn={imageOn} myRole={myRole} />
      ) : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <UserVideoComponent
            key={sub.stream.streamId}
            streamManager={sub}
            setImageOn={setImageOn}
            imageOn={imageOn}
            myRole={myRole}
          />
        ))}
    </S.VideoWrapper>
  );
}

function UserVideoComponent(props) {
  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);
  const videoRef = useRef();
  const roleName = props.myRole;
  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  // useEffect(() => {
  //   handleClickKillVote();
  // }, []);
  const handleClickKillVote = (sub) => {
    console.log(roleName, '롤네임');
    props.setImageOn(getNicknameTag(sub));
    const nickname = getNicknameTag(sub);
    const roomId = props.streamManager.stream.session.sessionId
      ? props.streamManager.stream.session.sessionId
      : props.streamManager.session.sessionId;

    if (isVoteTime) {
      console.log('보트시간');
      const URL = process.env.REACT_APP_SERVER_URL + `/rooms/${roomId}/vote/${nickname}`;
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
      setIsVoteTime(false);
      console.log(isVoteTime);
      setIsSkillTime(true);
    } else if (isSkillTime) {
      console.log('스킬시간');

      const URL = process.env.REACT_APP_SERVER_URL + `/rooms/${roomId}/skill/${nickname}`;
      console.log(nickname);
      if (roleName === 'MAFIA') {
        Swal.fire({
          title: `${nickname}을 선택했습니다.`,
          showCancelButton: false,
          confirmButtonText: '닫기',
        });
        axiosInstance.post(URL);
      } else if (roleName === 'POLICE') {
        gameAPI.useSkill(roomId, nickname).then((response) => {
          console.log(response.data.message);
          Swal.fire({
            title: `${response.data.message}`,
            showCancelButton: false,
            confirmButtonText: '닫기',
          });
        });
      }
    } else if (roleName === 'DOCTOR') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'SOLDIER') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'POLITICIAN') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'DEVELOPER') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'REPORTER') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'PRIEST') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
      axiosInstance.post(URL);
    } else if (roleName === 'GANGSTER') {
      Swal.fire({
        title: `${nickname}을 투표하셨습니다.`,
        showCancelButton: false,
        confirmButtonText: '닫기',
      });
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
