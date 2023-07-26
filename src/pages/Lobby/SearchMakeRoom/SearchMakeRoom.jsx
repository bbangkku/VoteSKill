import React, { useState } from 'react';
import * as S from 'pages/Lobby/SearchMakeRoom/SearchMakeRoom.Style';
import { constSelector } from 'recoil';

// 필터링 한 목록을 전달할거임.
function SearchMakeRoom() {
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

  // 방 목록, 사람 수 받아와야 함
  const roomLists = ['맢맢맢 ', '봇츠킬 ', '이겨내 ', '행복하게 ', '즐겜 ', '정인 ', '예에 ', '스크롤되나? ', '된다 '];
  const personCount = ['1', '2', '3', '4', '5', '1', '3', '6', '1'];
  const passwordRoom = [true, false, true, false, true, true, false, false];

  // 방에 입장할 때
  const [selectRoom, setSelectRoom] = useState(null);

  // 필터링된 방 목록
  const [filteredRooms, setFilteredRooms] = useState(roomLists);

  const handleItemClick = (item) => {
    // 방에 입장
    //todo : 백엔드에 해당 방 정보 요청, 해당 방대기실로 이동
    setSelectRoom(item);
    console.log(item);
  };

  // 방 제목
  const [roomName, setRoomName] = React.useState('');

  const filterRooms = (roomName) => {
    const filteredRooms = roomLists.filter((roomList) => roomList.includes(roomName));
    setFilteredRooms(filteredRooms);
  };
  const saveRoomName = (event) => {
    setRoomName(event.target.value);
    filterRooms(event.target.value); // 입력된 방 이름으로 방 목록을 필터링
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

      <S.RoomSquare>
        {filteredRooms.map((item, idx) => (
          <S.RoomContainer
            key={idx}
            onClick={() => handleItemClick(item)}
            style={{
              backgroundImage: 'linear-gradient(to top, red, yellow)',
              border: '10px solid black',
              borderRadius: '30px',
              textAlign: 'center',
            }}
          >
            {item}
            <S.People style={{ textAlign: 'center' }}>
              {personCount[idx]}/6 {passwordRoom[idx] && <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />}
            </S.People>
          </S.RoomContainer>
        ))}
      </S.RoomSquare>
    </>
  );
}

export default SearchMakeRoom;

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

// <S.Button
//   type="submit"
//   className={isHovering ? 'grow' : ''}
//   onMouseOver={handleMouseOver}
//   onMouseOut={handleMouseOut}
// >
//   방 검색
// </S.Button>
