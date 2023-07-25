import React, { useState } from 'react';
import * as S from 'pages/Lobby/Lobby.Style';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import RoomList from '../RoomList/RoomList';
function SearchRoom() {
  const [placeholder, setPlaceholder] = useState('방 제목을 입력해주세요.');
  const [isHovering, setIsHovering] = useState(false);

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('방 제목을 입력해주세요.');
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div>
        <S.InputRoomName placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.InputRoomName>
        <S.Button
          type="submit"
          className={isHovering ? 'grow' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          방 검색
        </S.Button>
      </div>
      <S.LevelCheckDiv>
        <input type="checkbox" />
        <text>게임중</text>
        <input type="checkbox" />
        <text>초보</text>
        <input type="checkbox" />
        <text>중수</text>
        <input type="checkbox" />
        <text>고수</text>
      </S.LevelCheckDiv>
      <br />
    </>
  );
}

export default SearchRoom;

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
