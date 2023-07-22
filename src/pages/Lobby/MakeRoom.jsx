import React, { useState } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';

function MakeRoom() {
  return (
    <S.Bottom>
      <S.MakeRoomButton>방만들기 </S.MakeRoomButton>
    </S.Bottom>
  );
}

export default MakeRoom;

//  못한코드..
// const Items = ['게임중', '초보', '중수', '고수'];
// <S.LevelCheckDiv>
//   {Items.map((item) => (
//     <React.Fragment key={item}>
//       <input type="checkbox" />
//       {item}
//     </React.Fragment>
//   ))}
// </S.LevelCheckDiv>
