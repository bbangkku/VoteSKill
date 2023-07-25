import React, { useState } from 'react';
import * as S from 'pages/Lobby/RoomList/RoomList.Style';
// import { roomname, setRoomname } from 'pages/Lobby/SearchRoom/SearchRoom';
import SearchRoom from 'pages/Lobby/SearchRoom/SearchRoom';
import { constSelector } from 'recoil';

//방 목록 가져오기
export const roomLists = ['맢맢맢', '봇츠킬', '이겨내', '행복하게', '즐겜', '정인', '예에', '스크롤되나?', '된다'];

// 방 인원수 가져오기
export const PersonCount = ['1', '2', '3', '4', '5', '6'];

function RoomList() {
  // 방 클릭 시 해당 방 입장
  const [selectRoom, setSelectRoom] = useState(null);

  // 필터링된 방 목록을 빈배열로 저장해놓음
  const [filteredRooms, setFilteredRooms] = useState(roomLists);

  const handleItemClick = (item) => {
    // 방에 입장하는코드
    setSelectRoom(item);
    console.log(item);
  };

  // 받은 방 목록 저장
  const handleFilteredRooms = (filteredRooms) => {
    setFilteredRooms(filteredRooms);
    // console.log('왔다');
  };

  return (
    <S.RoomSquare>
      {/* SearchRoom에 prop 전달 */}
      {filteredRooms.map((item) => (
        <S.RoomContainer
          key={item}
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
            {PersonCount[0]}/6
            <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />
          </S.People>
          {/* if 추가 (암호방일 때) */}
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
