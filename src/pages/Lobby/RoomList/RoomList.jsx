import React, { useState } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
// import { Scrollbars } from 'react-custom-scrollbars';

function RoomList() {
  const Items = ['맢맢맢', '봇츠킬', '이겨내', '행복하게', '즐겜', '정인'];

  const PersonCount = ['1', '2', '3', '4', '5', '6'];
  return (
    <S.RoomSquare>
      {Items.map((item) => (
        <S.RoomContainer
          key={item}
          style={{
            backgroundColor: 'grey',
            border: '10px solid black',
            borderRadius: '20px',
          }}
        >
          <br />
          {item}
          <S.People style={{ textAlign: 'right' }}>
            {PersonCount[0]}/6
            <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />
          </S.People>

          {/* if 넣어야함 잠금방 */}
        </S.RoomContainer>
      ))}
    </S.RoomSquare>
  );
}

export default RoomList;

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
