// import Modal from 'components/modal/Modal';
import * as S from 'components/passwordmodal/PasswordModal.Style';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
import Modal from 'react-modal';
function PasswordModal({ roomNumber }) {
  return (
    <div>
      <S.RoomMakeBackground>
        <PasswordInput roomNumber={roomNumber}></PasswordInput>
      </S.RoomMakeBackground>
    </div>
  );
}

function PasswordInput() {
  // 방 비번 입력
  const [password, setPassword] = React.useState('');
  const savePassword = (item) => {
    setPassword(item.target.value);
    console.log(password, '입력한 패스워드');
  };
  const checkPassword = () => {
    // 백엔드로 패스워드 보내자
    // axios
    // .post(`http://localhost:8000/room/${roomNumber}`, { password: password })
    //   .then((response) => {
    //     // 요청이 성공한 경우에 실행되는 부분
    //     console.log(response.data);
    //     window.location.href = `room/${roomNumber}`;
    //   })
    // .catch((error) => {
    //     // 요청이 실패한 경우에 실행되는 부분
    //     console.error(error);
    // alert(error)
    //   });

    // // 패스워드가 맞으면
    // if (password === 'asdsad') {
    //   console.log('맞음', roomNumber);
    //   // window.location.href = `waitingroom/${roomNumber}`;
    // } else {
    //   console.log(password);
    //   console.log('틀림');
    // }
    const makeRoomPost = () => {
      const data = {};
      const res = gameAPI.enterRoom(data);
      console.log(res);
    };

    // 비번방 체크
    const checkLists = ['암호방'];

    // 암호방 체크했으면 콜백으로 처리

    const roomPassInfo = (event) => {
      // setRoomPasswordInput(event.target.value);
    };
  };
  return (
    <div>
      <S.PasswordText>비밀번호</S.PasswordText>
      <S.SubmitInput type="password" onChange={savePassword} />
      <br />
      <S.SubmitButton onClick={checkPassword}>입력</S.SubmitButton>
    </div>
  );
}

export default PasswordModal;
