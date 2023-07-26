import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useDayChange from 'hooks/useDayChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
// 낮이면 -> background change
// 밤이면  -> theme : night
function GameRoom() {
  const { setNight, setDay } = useDayChange();

  const handleSetNight = () => {
    setNight();
  };

  const handleSetDay = () => {
    setDay();
  };

  return (
    <Layout isMain={false} $isNight={setDay()}>
      <Header />
      <S.ScreenWrapper>
        <S.ScreenGroup>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
        </S.ScreenGroup>
        <S.ScreenGroup>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
          <CamScreen></CamScreen>
        </S.ScreenGroup>
      </S.ScreenWrapper>
    </Layout>
  );
}

// 직업정해주기
// 낮 -> 밤 -> 낮 -> 밤 반복
// 밤 -> 3분
// 낮 회의시간 2분
// 낮 -> 투표

export default GameRoom;
