import React, { useState } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import SearchRoom from './SearchRoom/SearchRoom';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import RoomList from './RoomList/RoomList';
import SearchMakeRoom from './SearchMakeRoom/SearchMakeRoom';

function Lobby() {
  //todo : 백엔드에 방 목록 get 요청
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
