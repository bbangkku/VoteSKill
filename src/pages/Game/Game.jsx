import { useState } from 'react';
import useOpenVidu from 'hooks/useOpenVidu';
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import GameRoom from 'pages/GameRoom/GameRoom';
import WaitingRoom from 'pages/WaitingRoom/WaitingRoom';
import { useLocation, useParams } from 'react-router-dom';
import useLayoutChange from 'hooks/useLayoutChange';

function Game() {
  const location = useLocation();
  const password = location.state.password;
  const { sessionId } = useParams();
  const { layout } = useLayoutChange();
  const openvidu = useOpenVidu();
  const [inGame, setInGame] = useState(false);
  const [myRole, setMyRole] = useState(undefined);

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      {inGame ? (
        <GameRoom sessionId={sessionId} openvidu={openvidu} password={password} myRole={myRole} />
      ) : (
        <WaitingRoom
          sessionId={sessionId}
          openvidu={openvidu}
          password={password}
          setInGame={setInGame}
          setMyRole={setMyRole}
        />
      )}
    </Layout>
  );
}

export default Game;
