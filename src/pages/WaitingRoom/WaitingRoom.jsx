import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';

function WaitingRoom() {
  const { session, mainStreamManager, messageList, subscribers, sendMessage, setRoomId, setUserName, joinSession } =
    useOpenVidu();

  useEffect(() => {
    setRoomId('ssafy7074');
    setUserName('LEE');
    joinSession();
  }, []);

  return (
    <Layout>
      <Header />
      {session ? (
        <S.Total>
          <PlayerList />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : null}
    </Layout>
  );
}

export default WaitingRoom;
