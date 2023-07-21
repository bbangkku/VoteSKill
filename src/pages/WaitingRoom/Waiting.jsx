import React, { useState } from 'react';
import * as S from 'pages/WaitingRoom/Waiting.Style';

function Waiting() {
  const Items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <S.Total>
      <S.Square>
        {Items.map((item) => (
          <S.Container
            key={item}
            style={{ margin: '5px', backgroundColor: 'white', border: '10px solid black', borderRadius: '30px' }}
          >
            {item}
            <br />
            <S.StyledButton>강퇴</S.StyledButton>
          </S.Container>
        ))}
      </S.Square>

      <S.Chat>
        <S.SendContainer></S.SendContainer>
        <S.Enter>
          <S.InputBar></S.InputBar>
          <S.LargeButton>입력</S.LargeButton>
        </S.Enter>
      </S.Chat>
    </S.Total>
  );
}

export default Waiting;
