import React from 'react';
import * as S from 'pages/WaitingRoom/Chatting/Chatting.style';

function Chatting() {
  const handleClick = () => {
    window.location.href = 'game/:1';
  };
  return (
    <S.Chat>
      <S.StartButton onClick={() => handleClick()}>Game Start</S.StartButton>
      <S.SendContainer>{/* <S.StartButton>loading...</S.StartButton> */}</S.SendContainer>
      <S.BottomBar>
        <S.InputBar></S.InputBar>
        <S.SendButton>입력</S.SendButton>``
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chatting;
