import React, { useState } from 'react';
import * as S from 'pages/WaitingRoom/Waiting.Style';

function Waiting() {
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호', '아무개', '유유'];

  return (
    <S.Total>
      <S.Square>
        {Items.map((item) => (
          <S.Container
            key={item}
            style={{ margin: '10px', backgroundColor: 'white', border: '10px solid black', borderRadius: '30px' }}
          >
            <br />
            {item}
            <S.OutButton>강퇴</S.OutButton>
          </S.Container>
        ))}
      </S.Square>

      <S.Chat>
        <S.SendContainer></S.SendContainer>
        <S.BottomBar>
          <S.InputBar></S.InputBar>
          <S.SendButton>입력</S.SendButton>
        </S.BottomBar>
      </S.Chat>
    </S.Total>
  );
}

export default Waiting;
