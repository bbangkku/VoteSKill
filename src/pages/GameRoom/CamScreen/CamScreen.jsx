import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';
import gameAPI from 'apis/gameAPI';
import showSwal from 'utils/showSwal';

function CamScreen({ publisher, subscribers, myRole, roomId }) {
  const [imageOn, setImageOn] = useState('');

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

function VoteAndSkill(props) {
  const checkVote = (sub) => props.imageOn === props.getNicknameTag(sub);

  const resetVote = () => props.setImageOn('');

  return (
    <>
      {checkVote(props.streamManager) && props.isVoteTime && (
        <S.KillVote
          src={process.env.PUBLIC_URL + '/image/game/killvote.png'}
          onClick={() => resetVote(props.streamManager)}
        />
      )}
      {checkVote(props.streamManager) &&
        props.isSkillTime &&
        // 직업에따라 능력사용
        props.myRole === 'MAFIA' && (
          <S.SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_mafia.png'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
      {checkVote(props.streamManager) &&
        props.isSkillTime &&
        // 직업에따라 능력사용
        props.myRole === 'POLICE' && (
          <S.SkillImage
            src={process.env.PUBLIC_URL + '/image/game/skill_police.png'}
            onClick={() => resetVote(props.streamManager)}
          />
        )}
    </>
  );
}

function UserVideoComponent(props) {
  const isVoteTime = useRecoilValue(isVoteTimeState);
  const isSkillTime = useRecoilValue(isSkillTimeState);
  const videoRef = useRef();
  const roleName = props.myRole;
  const roomId = props.roomId;
  const SKILL_ROLE = ['DOCTOR', 'SOLDIER', 'POLITICIAN', 'DEVELOPER', 'REPORTER', 'PRIEST', 'MAFIA'];

  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  const useSkillAndPost = async (roleName, nickname) => {
    if (roleName === 'POLICE') {
      const { data } = await gameAPI.useSkill(roomId, nickname);
      showSwal(`${data.message}`, '닫기');
    }
    if (SKILL_ROLE.includes(roleName)) {
      showSwal(`${nickname}을 선택하셨습니다.`, '닫기');
      await gameAPI.useSkill(roomId, nickname);
    }
  };

  const useVoteAndPost = async (nickname) => {
    showSwal(`${nickname}을 투표하셨습니다.`, '닫기');
    const { data } = await gameAPI.voteGame(roomId, nickname);
  };

  const handleClickKillVote = (sub) => {
    if (!isVoteTime && !isSkillTime) return;

    const nickname = getNicknameTag(sub);
    props.setImageOn(nickname);

    if (isVoteTime) useVoteAndPost(nickname);
    if (isSkillTime) useSkillAndPost(roleName, nickname);
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, [props.streamManager]);

  // checkvote는 닉네임따라 체크 여부만
  return (
    <>
      {props.streamManager !== undefined ? (
        <S.UserInfoWrapper>
          <VoteAndSkill
            streamManager={props.streamManager}
            getNicknameTag={getNicknameTag}
            setImageOn={props.setImageOn}
            imageOn={props.imageOn}
            isVoteTime={isVoteTime}
            isSkillTime={isSkillTime}
            myRole={props.myRole}
          />
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
