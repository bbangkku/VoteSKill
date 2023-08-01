import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import * as S from 'pages/GameRoom/GameRoomNight.Style';
import { CamScreen } from './CamScreen.Style';
import useLayoutChange from 'hooks/useLayoutChange';
import { useEffect } from 'react';

function GameRoomNight() {
  const { layout, setDay, setNight, setMafia, setCitizen } = useLayoutChange();

  const camScreenData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  useEffect(() => {
    setNight();
    setCitizen();
  }, []);

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      <S.TimeHeader>
        <S.TimeIcon src={process.env.PUBLIC_URL + '/image/game/time_icon_white.svg'} />
        <S.LeftTime> 1:00</S.LeftTime>
        <S.DayText>능력을 발동중 입니다...</S.DayText>
      </S.TimeHeader>
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

export default GameRoomNight;
