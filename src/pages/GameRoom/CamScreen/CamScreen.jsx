import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';
import gameAPI from 'apis/gameAPI';
import showSwal from 'utils/showSwal';
import VoteAndSkill from 'pages/GameRoom/VoteAndSkill/VoteAndSkill';
import convertMessageToText from 'utils/convertMessageToText';
import { deadPlayerState } from 'recoil/atoms/gameState';
import GraveComponent from 'components/gravecomponent/GraveComponent';
import { checkDeath } from 'utils/checkDeath';

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

function UserVideoComponent(props) {
  const isVoteTime = useRecoilValue(isVoteTimeState);
  const isSkillTime = useRecoilValue(isSkillTimeState);
  const videoRef = useRef();
  const roleName = props.myRole;
  const roomId = props.roomId;
  const SKILL_ROLE = ['DOCTOR', 'SOLDIER', 'POLITICIAN', 'DEVELOPER', 'REPORTER', 'PRIEST', 'MAFIA'];
  const [deadPlayers] = useRecoilState(deadPlayerState);

  const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;

  const useSkillAndPost = async (roleName, nickname) => {
    if (roleName === 'POLICE') {
      const { data } = await gameAPI.useSkill(roomId, nickname);
      showSwal(convertMessageToText(data.message), '닫기');
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
    console.log('닉네임: ' + getNicknameTag(props.streamManager));
    console.log('죽은사람 리스트 : ' + deadPlayers);
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
