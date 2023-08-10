import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import JobAssign from 'components/modal/JobAssign';
import GoBack from 'utils/preventGoBack';
import { useLocation } from 'react-router-dom';
import useOpenVidu from 'hooks/useOpenVidu';
import { KillVote } from './CamScreen.Style';
import { createBrowserHistory } from 'history';

function GameRoom() {
  const { layout, setDay, setMafia, setCitizen } = useLayoutChange();
  const { isVote, setVote } = useState(false);
  const history = createBrowserHistory();

  // const location = useLocation();
  // const sessionId = location.state.sessionId;

  // 뒤로 가기 방지용

  const GoBack = () => {
    history.push(null, '', history.location.href);

    const outRoom = confirm('뒤로 가시면 방을 나가게 됩니다. 나가시겠습니까?');

    if (outRoom) {
      window.location.href('/lobby');
    }
  };
  
  useEffect(() => {
    (() => {
      history.push('/lobby');
      history.push(null, '', history.location.href);

      window.addEventListener('popstate', GoBack);
    })();

    return () => {
      window.removeEventListener('popstate', GoBack);
    };
  }, []);

  useEffect(() => {
    history.push(null, '', history.location.href);
  }, [history.location]);
  //---------------------------------

  useEffect(() => {
    setDay();
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

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      <S.ScreenWrapper>
        <SecondHeader layout={layout} imageUrl={imageUrl} time={time} comment={comment}></SecondHeader>
        <JobAssign></JobAssign>
        <CamScreen></CamScreen>
        {/* <CamScreen sessionId={sessionId} /> */}
      </S.ScreenWrapper>
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
