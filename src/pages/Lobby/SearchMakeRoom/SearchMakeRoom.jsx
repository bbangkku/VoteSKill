import React, { useState } from 'react';
import * as S from 'pages/Lobby/SearchMakeRoom/SearchMakeRoom.Style';
import { constSelector } from 'recoil';

// 필터링 한 목록을 전달할거임.
function SearchMakeRoom() {
  const [placeholder, setPlaceholder] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  // 체크박스 상태관리
  const checkLists = ['게임중', '초보', '중수', '고수'];
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [wantLevel, setWantLevel] = useState([]);
  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      console.log(checkedItems);
      setCheckedItems(checkedItems);
    } else if (!isChecked) {
      checkedItems.delete(id);
      console.log(checkedItems);

      setCheckedItems(checkedItems);
    }
  };
  const checkHandled = ({ target }) => {
    setIsChecked(!isChecked);
    checkItemHandler(target.id, target.checked);
  };
  const checkLevel = ({ target }) => {
    console.log(target.id, 'asdasdas');
  };
  //////////////////////////////////

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('');
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  // 방 목록, 사람 수 받아와야 함
  const roomLists = [
    '마피아 ',
    '봇츠킬 ',
    '이겨내 ',
    '행복하게 ',
    '즐겜 ',
    '정인 ',
    '예에 ',
    '스크롤되나? ',
    '된다 ',
    '진짜',
  ];
  const personCount = ['1', '2', '3', '4', '5', '1', '3', '6', '1', '1'];
  const roomLevel = [
    '초보',
    '중수',
    '고수',
    ['초보', '중수'],
    ['초보', '중수', '고수'],
    ['초보', '고수'],
    ['중수', '고수'],
    '중수',
    '고수',
    '초보',
  ];
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
  const [roomName, setRoomName] = React.useState(roomLists);

  const filterRooms = (roomName) => {
    const filteredRooms = roomLists.filter((roomList) => roomList.includes(roomName));
    setFilteredRooms(filteredRooms);
  };
  const saveRoomName = (event) => {
    setRoomName(event.target.value);
    filterRooms(event.target.value); // 입력된 방 이름으로 방 목록을 필터링
  };

  const addRoom = (item) => {
    console.log(`${item} 생성완료 ! `);
    const newRoom = roomName.filter((data) => {
      console.log(data);
      return data !== item;
    });
    setRoomName(newRoom);
  };

  return (
    <>
      <div>
        <S.SearchBarWrapper>
          <S.SearchInput
            type="search"
            name="search"
            autoComplete="off"
            required
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={saveRoomName}
          />
        </S.SearchBarWrapper>
      </div>
      {checkLists.map((item, index) => (
        <S.CheckBoxWrapper key={index}>
          <S.CheckBoxInput type="checkbox" id={index} name="level" onChange={(e) => checkHandled(e)} />
          <S.CheckboxLabel htmlFor={index} onClick={(e) => checkLevel(e)}>
            {item}
          </S.CheckboxLabel>
        </S.CheckBoxWrapper>
      ))}

      <br />
      <br />

      <S.RoomSquare>
        {filteredRooms.map((item, idx) => (
          <S.RoomContainer
            key={idx}
            onClick={() => handleItemClick(item)}
            style={{
              backgroundImage: 'linear-gradient(to top, red, yellow)',
              border: '7px solid black',
              borderRadius: '30px',
              textAlign: 'center',
              fontFamily: 'Dokdo',
              fontSize: '25px',
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
