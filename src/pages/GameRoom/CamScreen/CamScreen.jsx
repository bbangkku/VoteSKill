import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSkillTimeState, isVoteTimeState, skillState } from 'recoil/atoms/gameState';
import gameAPI from 'apis/gameAPI';
import showSwal from 'utils/showSwal';
import VoteAndSkill from 'pages/GameRoom/VoteAndSkill/VoteAndSkill';
import { deadPlayerState } from 'recoil/atoms/gameState';
import GraveComponent from 'components/gravecomponent/GraveComponent';
import { checkDeath } from 'utils/checkDeath';
import Swal from 'sweetalert2';

function CamScreen({ publisher, subscribers, myRole, roomId, imageOn, setImageOn }) {
  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <UserVideoComponent
          streamManager={publisher}
          setImageOn={setImageOn}
          imageOn={imageOn}
          myRole={myRole}
          roomId={roomId}
        />
      ) : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <UserVideoComponent
            key={sub.stream.streamId}
            streamManager={sub}
            setImageOn={setImageOn}
            imageOn={imageOn}
            myRole={myRole}
            roomId={roomId}
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
  const roomId = props.roomId;
  const deadPlayers = useRecoilValue(deadPlayerState);
  const NORMAL_SKILL_ROLE = ['DOCTOR', 'MAFIA'];
  const NONE_SKILL_ROLE = ['SOLDIER', 'POLITICIAN'];
  const ONECE_SKILL_ROLE = ['PRIEST', 'REPORTER'];

  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;
  const [skill, setSkill] = useRecoilState(skillState(roleName));

  const useSkillAndPost = async (roleName, nickname) => {
    if (roleName === 'POLICE') {
      const { data } = await gameAPI.useSkill(roomId, nickname);
      showSwal(data.message, '닫기');
      return;
    }
    if (NONE_SKILL_ROLE.includes(roleName)) {
      showSwal(`현재 직업은 사용할 스킬이 없습니다.`, '닫기');
      return;
    }
    if (NORMAL_SKILL_ROLE.includes(roleName)) {
      showSwal(`${nickname}을 선택하셨습니다.`, '닫기');
      await gameAPI.useSkill(roomId, nickname);
      return;
    }
    if (ONECE_SKILL_ROLE.includes(roleName)) {
      if (skill < 1) {
        showSwal(`스킬 사용 횟수가 소진되었습니다.`, '닫기');
        return;
      }
      showSwal(`${nickname}을 선택하셨습니다.`, '닫기');
      await gameAPI.useSkill(roomId, nickname);
      setSkill((skill) => skill - 1);
    }
  };

  const useVoteAndPost = async (nickname) => {
    showSwal(`${nickname}을 투표하셨습니다.`, '닫기');
    const { data } = await gameAPI.voteGame(roomId, nickname);
  };

  const handleClickKillVote = (sub) => {
    if (!isVoteTime && !isSkillTime) return;

    Swal.fire({
      title: `${getNicknameTag(sub)}님을 선택하겠습니까?`,
      text: '다시 되돌릴 수 없습니다. 신중하세요.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6367CE',
      cancelButtonColor: '#970000',
      confirmButtonText: '승인',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const nickname = getNicknameTag(sub);
        props.setImageOn(nickname);
        if (isVoteTime) useVoteAndPost(nickname);
        if (isSkillTime) useSkillAndPost(roleName, nickname);
        // setIsVoteTime(false);
        // setIsSkillTime(false);
        // props.setImageOn('');
      }
    });
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  return (
    <>
      {props.streamManager !== undefined ? (
        <S.UserInfoWrapper>
          {/* {checkDeath(deadPlayers, getNicknameTag(props.streamManager)) ? (
            <GraveComponent></GraveComponent>
          ) : (
            <VoteAndSkill
              streamManager={props.streamManager}
              getNicknameTag={getNicknameTag}
              setImageOn={props.setImageOn}
              imageOn={props.imageOn}
              isVoteTime={isVoteTime}
              isSkillTime={isSkillTime}
              myRole={props.myRole}
            />
          )} */}
          <GraveComponent streamManager={props.streamManager} getNicknameTag={getNicknameTag}></GraveComponent>
          <VoteAndSkill
            streamManager={props.streamManager}
            getNicknameTag={getNicknameTag}
            setImageOn={props.setImageOn}
            imageOn={props.imageOn}
            myRole={props.myRole}
          />
          {checkDeath(deadPlayers, getNicknameTag(props.streamManager)) ? null : (
            <S.VideoContainer onClick={() => handleClickKillVote(props.streamManager)}>
              <S.CustomScreen autoPlay={true} ref={videoRef} />
            </S.VideoContainer>
          )}
          <span>{getNicknameTag(props.streamManager)}</span>
        </S.UserInfoWrapper>
      ) : null}
    </>
  );
}

export default React.memo(CamScreen);
