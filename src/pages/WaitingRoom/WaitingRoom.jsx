import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import useOpenVidu from 'hooks/useOpenVidu';
import { useLocation, useParams } from 'react-router';
import gameAPI from 'apis/gameAPI';
import useEventSource from 'hooks/useEventsource';
import axios from 'axios';

function WaitingRoom() {
  const { sessionId } = useParams();
  const location = useLocation();
  const url = `http://13.125.113.149:8080/sse/enter/${sessionId}/${sessionStorage.getItem('nickname')}`;
  const source = new EventSource(url); // 구독
  const connectData = useEventSource('connect', sessionId, sessionStorage.getItem('nickname'));

  console.log(source, '구독완료');
  const {
    session,
    messageList,
    subscribers,
    sendMessage,
    setRoomId,
    setUserName,
    setPassword,
    joinSession,
    publisher,
    publisherSetting,
    setPublisherSetting,
  } = useOpenVidu();

  const getServerSentEvent = async () => {
    const res = await axios.get(url);
  };

  useEffect(() => {
    if (session) {
      console.log('이미 세션이 존재합니다.');
      return;
    }
    const nickname = sessionStorage.getItem('nickname');
    const password = location.state.password;
    setRoomId(sessionId);
    setUserName(nickname);
    setPassword(password);
    setPublisherSetting({ ...publisherSetting, publishAudio: true, publishVideo: true });
    joinSession();
  }, [sessionId]);

  useEffect(() => {
    getServerSentEvent();
  });
  console.log(connectData, '커넥트');
  return (
    <Layout>
      <Header />
      {session && subscribers && publisher ? (
        <S.Total>
          <PlayerList publisher={publisher} subscribers={subscribers} />
          <Chatting messageList={messageList} sendMessage={sendMessage} />
        </S.Total>
      ) : (
        <h1>로딩중</h1>
      )}
    </Layout>
  );
}

export default WaitingRoom;
