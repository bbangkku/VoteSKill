import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';
import JobAssign from 'components/jobassign/JobAssign';
import { useLocation } from 'react-router-dom';
import useOpenVidu from 'hooks/useOpenVidu';
import useEventSource from 'hooks/useEventsource';
import JobIntroduce from 'components/jobintroduce/JobIntroduce';
function GameRoom() {
  const { isVote, setVote } = useState(false);
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();

  const location = useLocation();
  const sessionId = location.state.sessionId;
  const nickname = sessionStorage.getItem('nickname');
  // const roomData = useEventSource('room', sessionId, nickname);
  const roleData = useEventSource('role', sessionId, nickname);
  const [roleParsed, setroleParsed] = useState('');
  const [roomParsed, setroomParsed] = useState('');
  // 직업배정 모달 열기
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { openModal: openJobIntroduceModal } = useModal('JobIntroduce');

  // const minutes = Math.floor(time / 60) >= 0 ? Math.floor(time / 60) : 0; // 분
  // const seconds = Math.floor(time % 60) >= 0 ? Math.floor(time % 60) : 0; // 초

  //투표

  useEffect(() => {
    setDay();
    console.log('호출');
  }, []);
  const imageUrl = (layout) => {
    if (layout.Day) {
      return process.env.PUBLIC_URL + '/image/game/timeicon.svg';
    } else {
      return process.env.PUBLIC_URL + '/image/game/time_icon_white.svg';
    }
  };

  const time = (layout) => {
    if (layout.Day) {
      if (isVote) {
        return ' 0:15';
      }
      return ' 2:00';
    } else {
      return ' 0:30';
    }
  };

  const comment = (layout) => {
    if (layout.Day) {
      if (isVote) {
        return '마피아로 생각되는 사람을 투표해주세요.';
      }
      return '~번째 낮입니다.';
    } else {
      if (layout.Mafia) {
        return '당신은 마피아입니다. 죽일 사람을 선택해주세요.';
      } else {
        return '능력을 사용중입니다...';
      }
    }
  };
  const checkData = () => {
    console.log(roleData);
    const roleParse = JSON.parse(roleData);
    setroleParsed(roleParse.role);
  };
  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      <S.ScreenWrapper>
        <SecondHeader layout={layout} imageUrl={imageUrl} time={time} comment={comment}></SecondHeader>
        <JobAssign></JobAssign>
        <CamScreen sessionId={sessionId} />
      </S.ScreenWrapper>
      <button onClick={checkData}>메뉴</button>
      <br />
      <div>
        <HiQuestionMarkCircle size={'5%'} onClick={openjobAssign} />

        <Modal id="JobAssign">
          <JobAssign data={roleParsed} />
        </Modal>
      </div>
      <div>
        {roleData}
        <br />
        {roleParsed}파스데이터
        <br />
        {/* {roleParsed === 'DEVELOPER' ? 
        (
          <img src={process.env.PUBLIC_URL + '/image/jobintroduce/developer.png'} alt="mafia" />
        ) : null}
        {roleParsed}파스 */}
      </div>
    </Layout>
  );
}

function SecondHeader({ layout, imageUrl, time, comment }) {
  return (
    <S.TimeHeader layout={layout}>
      <S.TimeIcon src={imageUrl(layout)} />
      <S.LeftTime>{time(layout)}</S.LeftTime>
      <S.DayText>{comment(layout)}</S.DayText>
    </S.TimeHeader>
  );
}

export default GameRoom;
