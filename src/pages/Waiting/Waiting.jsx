import React, { useState } from 'react';
import * as S from 'pages/Waiting/Waiting.Style';
import * as L from 'components/layout/Layout.Style';

import Chat from './Chat';
import IdList from './IdList';
import Layout from 'components/layout/Layout';
import useDayChange from 'hooks/useDayChange';

function Waiting() {
  const { isNight } = useDayChange();
  return (
    // <Layout isMain={true}>
    <L.Background $isNight={false}>
      <S.Total>
        <IdList />
        <Chat />
      </S.Total>
    </L.Background>
    // </Layout>
  );
}

export default Waiting;
