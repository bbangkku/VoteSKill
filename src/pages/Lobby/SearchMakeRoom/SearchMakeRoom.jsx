import React, { useEffect, useState } from 'react';
import * as S from 'pages/Lobby/SearchMakeRoom/SearchMakeRoom.Style';
import { constSelector, useSetRecoilState, useRecoilValue } from 'recoil';
import { responseData } from 'recoil/atoms/lobbyState';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import PasswordModal from 'components/passwordmodal/PasswordModal';

function SearchMakeRoom() {
  // 데이터 불러오기
  const allData = useRecoilValue(responseData);
  const roomPasswords = allData.map((item) => item.roomPassword);
  const roomLevels = allData.map((item) => item.roomLevel);

  // 체크박스 상태관리
  const checkLists = ['초보', '중수', '고수'];
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkItemHandler = (id, isChecked) => {
    setCheckedItems(checkedItems);
    if (isChecked) {
      checkedItems.add(checkLists[id]);
      console.log(checkedItems);
    } else if (!isChecked) {
      checkedItems.delete(checkLists[id]);
      console.log(checkedItems);
    }
  };
  const checkHandled = ({ target }) => {
    setIsChecked(!isChecked);
    checkItemHandler(target.id, target.checked);
  };

  // 방 필터링하기
  const [filteredRooms, setFilteredRooms] = useState(allData);
  const [filteredLevel, setfilteredLevel] = useState(allData);
  const [passwordInput, setPasswordInput] = useState('');
  const { openModal } = useModal('PasswordModal');
  const [roomNumber, setRoomNumber] = useState('');
  const handleItemClick = (item) => {
    const selectedRoomData = allData.find((value) => value.roomName === item);
    const selectedRoomId = selectedRoomData.roomId;
    setRoomNumber(selectedRoomId);
    if (roomPasswords[selectedRoomId] === '') {
      // 비밀번호가 없는 경우
      console.log('룸넘버', selectedRoomId, '비번없음');
      // window.location.href = `waitingroom/${selectedRoomId}`;
    } else {
      // 비밀번호가 있는 경우
      console.log('룸넘버', selectedRoomId, '비번있음');
      openModal();
    }
  };

  // 원하는 방 제목 입력했을 때 방 필터링
  const filterRooms = (inputRoomName) => {
    // 입력하는 글자 포함하면 필터링 됨
    const filteredRooms = allData.filter((item) => item.roomName.includes(inputRoomName));
    setFilteredRooms(filteredRooms);
  };
  const saveRoomName = (event) => {
    filterRooms(event.target.value); // 입력된 방 이름으로 방 목록을 필터링
  };

  // 원하는 레벨 입력했을 때 방 필터링

  const filterLevel = () => {
    console.log(checkedItems);
    const filterLevels = roomLevels.filter((item) => item.includes(roomLevels));
    setfilteredLevel(filterLevels);
  };
  const saveRoomLevel = (event) => {
    filterLevel(event.target.value); // 입력된 방 이름으로 방 목록을 필터링
  };

  return (
    <>
      {/* 방제목 InputBar */}
      <div>
        <S.SearchBarWrapper>
          <S.SearchInput
            type="search" // 치고 지우고 싶을 때 x표시
            autoComplete="off" //자동완성
            required
            onChange={saveRoomName}
          />
        </S.SearchBarWrapper>
        <div style={{ lineHeight: '30%' }}>
          <br />
        </div>
      </div>

      {/* Level 체크박스 */}

      {/* <br /> */}
      {checkLists.map((item, index) => (
        <S.CheckBoxWrapper key={index}>
          <S.CheckBoxInput type="checkbox" id={index} name="level" onChange={(e) => checkHandled(e)} />
          <S.CheckboxLabel htmlFor={index} onClick={(e) => saveRoomLevel(e)}>
            {item}
          </S.CheckboxLabel>
          &nbsp;
        </S.CheckBoxWrapper>
      ))}
      <div style={{ lineHeight: '100%' }}>
        <br />
      </div>

      {/* 방 목록 및 인원수, 잠금상태 */}
      <S.RoomSquare>
        {filteredRooms.map((item) => (
          <S.RoomContainer
            key={item.roomId}
            onClick={() => {
              handleItemClick(item.roomName);
            }}
            style={{
              backgroundImage: 'linear-gradient(to top, red, yellow)',
              border: '7px solid black',
              borderRadius: '30px',
              textAlign: 'center',
              fontFamily: 'Dokdo',
              fontSize: '25px',
            }}
          >
            {item.roomName}
            <S.People style={{ textAlign: 'center' }}>
              {item.roomPersonCount}/6 {item.roomPassword && <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />}
            </S.People>
          </S.RoomContainer>
        ))}
      </S.RoomSquare>

      {/* useState해서 방 index props로 넘겨주는 거 만들기 */}
      <Modal id="PasswordModal">
        <PasswordModal roomNumber={roomNumber} />
      </Modal>
    </>
  );
}

export default SearchMakeRoom;
