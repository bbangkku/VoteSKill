import React, { useState } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import SearchRoom from './SearchRoom/SearchRoom';
import MakeRoom from './MakeRoom/MakeRoom';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import RoomList from './RoomList/RoomList';

function Lobby() {
  return (
    <Layout>
      <Header />
      <S.Container>
        <S.Center>
          <SearchRoom />
          <RoomList />
        </S.Center>
        <MakeRoom />
      </S.Container>
    </Layout>
  );
}

export default Lobby;
