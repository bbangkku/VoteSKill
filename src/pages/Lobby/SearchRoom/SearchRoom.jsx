import React, { useState } from 'react';
import * as S from 'pages/Lobby/SearchRoom/SearchRoom.Style';
import { roomLists } from 'pages/Lobby/RoomList/RoomList';
import { constSelector } from 'recoil';

// 필터링 한 목록을 전달할거임.
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

  const [roomName, setRoomName] = React.useState('');
  const onClick = () => {
    console.log(roomName);
    console.log(roomLists);

    const filteredRooms = roomLists.filter((roomList) => roomList.includes(roomName));
    console.log(filteredRooms);
  };

  const saveRoomName = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <>
      <div>
        <S.InputRoomName
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={saveRoomName}
        ></S.InputRoomName>
        <S.Button
          type="submit"
          className={isHovering ? 'grow' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onClick}
        >
          방 검색
        </S.Button>
      </div>
      <S.LevelCheckDiv>
        <input type="checkbox" name="gameing" />
        <span style={{ color: '#00C3FF	' }}>게임중</span>
        <input type="checkbox" name="min" />
        <span style={{ color: '#00C3FF' }}>초보</span>
        <input type="checkbox" name="mid" />
        <span style={{ color: '#00C3FF' }}>중수</span>
        <input type="checkbox" name="max" />
        <span style={{ color: '#00C3FF' }}>고수</span>
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
