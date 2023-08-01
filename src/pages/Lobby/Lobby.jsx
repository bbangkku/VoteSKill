import React, { useState, useEffect } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import SearchRoom from './SearchRoom/SearchRoom';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import RoomList from './RoomList/RoomList';
import SearchMakeRoom from './SearchMakeRoom/SearchMakeRoom';
import { getRoomList } from 'recoil/atoms/lobbyState'; // 위에서 작성한 getRoomList 함수를 가져옵니다.

function Lobby() {
  //todo : 백엔드에 방 목록 get 요청
  useEffect(() => {
    getRoomList();
  }, []);
  return (
    <Layout>
      <Header />
      <S.Container>
        <S.Center>
          <SearchMakeRoom />
        </S.Center>
        <MakeRoom />
      </S.Container>
    </Layout>
  );
}

export default Lobby;
