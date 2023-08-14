import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState } from 'recoil';
import { isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';

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
  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);
  const videoRef = useRef();
  const roleName = props.myRole;
  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  const handleClickKillVote = (sub) => {
    if (isVoteTime || isSkillTime) {
      props.setImageOn(getNicknameTag(sub));
    } else {
      return;
    }
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
