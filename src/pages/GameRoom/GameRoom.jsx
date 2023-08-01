import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen';
// 낮이면 -> background change
// 밤이면  -> theme : night
function GameRoom() {
  const { layout, setDay, setNight, setMafia, setCitizen } = useLayoutChange();

  // setDay() -> 처음실행 / 그 다음부터 4분주기
  // setNight() -> 3분후 실행 / 그다음부터 4분주기

  const camScreenData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      {layout.Day ? (
        <S.TimeHeader>
          <S.TimeIcon src={process.env.PUBLIC_URL + '/image/game/timeicon.svg'} />
          <S.LeftTime> 3:00</S.LeftTime>
          <S.DayText>번째 낮입니다.</S.DayText>
        </S.TimeHeader>
      ) : (
        <S.TimeHeader>
          <S.TimeIcon src={process.env.PUBLIC_URL + '/image/game/time_icon_white.svg'} />
          <S.LeftTime> 1:00</S.LeftTime>
          <S.DayText>능력을 사용중입니다...</S.DayText>
        </S.TimeHeader>
      )}

      <S.ScreenWrapper>
        {camScreenData.map((item2) => (
          <S.PreVideoArea key={item2.id}>
            <CamScreen />
          </S.PreVideoArea>
        ))}
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
