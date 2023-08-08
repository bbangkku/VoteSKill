import React, { useEffect, useState } from 'react';
import * as S from 'pages/Lobby/RoomList/RoomList.Style';
import { constSelector, useSetRecoilState, useRecoilValue } from 'recoil';
import { responseData } from 'recoil/atoms/lobbyState';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import PasswordModal from 'components/passwordmodal/PasswordModal';
import { colors } from '@mui/material';
import axios from 'axios';
import PlayerList from 'pages/WaitingRoom/PlayerList/PlayerList';
function RoomList() {
  // SearchRoom에서 받은 데이터 불러오기
  // const allData = ({ data }) => {
  //   console.log(data);
  // };
  const allData = useRecoilValue(responseData);
  const roomPasswords = allData.map((item) => item.password);
  // 체크박스 상태관리

  // 방 필터링하기
  const { openModal } = useModal('PasswordModal');
  const [item, setItem] = useState('');

  // 비밀번호 여부
  const hasPassword = (item) => item.password !== '';

  const checkPassword = (item, password) => {
    axios
      .post(`http://localhost:8000/rooms/${item.name}`, { password: password })
      .then((response) => {
        console.log(response.data);
        window.location.href = `rooms/${item.name}`;
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleItemClick = (item) => {
    const roomPassword = item.password;
    const roomId = item.name;
    setItem(item);
    // setRoomNumber(selectedRoomId);
    if (roomPassword === '') {
      // 비밀번호가 없는 경우
      checkPassword(item, roomPassword);
    } else {
      // 비밀번호가 있는 경우
      openModal();
    }
  };

  return (
    <>
      {/* 방 목록 및 인원수, 잠금상태 */}
      <S.RoomSquare>
        {allData.map((item) => (
          <S.RoomContainer
            key={item.name}
            onClick={() => {
              handleItemClick(item);
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
            {item.name}
            <S.People style={{ textAlign: 'center' }}>
              {item.people}/6 {item.password && <S.Logo src={process.env.PUBLIC_URL + '/lock_logo.png'} />}
            </S.People>
          </S.RoomContainer>
        ))}
      </S.RoomSquare>

      {/* useState해서 방 index props로 넘겨주는 거 만들기 */}
      <Modal id="PasswordModal">
        <PasswordModal item={item} />
      </Modal>
    </>
  );
}

export default RoomList;
