// import Modal from 'components/modal/Modal';
import * as S from 'components/passwordmodal/PasswordModal.Style';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';

function PasswordModal({ item }) {
  return (
    <div>
      <S.RoomMakeBackground>
        <PasswordInput item={item}></PasswordInput>
      </S.RoomMakeBackground>
    </div>
  );
}

function PasswordInput({ item }) {
  // 방 비번 입력
  const [password, setPassword] = React.useState('');
  const savePassword = (item) => {
    setPassword(item.target.value);
    console.log('입력한 패스워드', password);
  };
  const checkPassword = () => {
    console.log(item);
    axios
      .post(`http://localhost:8000/rooms/${item.name}`, { password: password })
      .then((response) => {
        console.log(response.data);
        window.location.href = `rooms/${item.name}`;
      })
      .catch((error) => {
        alert(error);
      });

    const makeRoomPost = () => {
      const data = {};
      const res = gameAPI.enterRoom(data);
      console.log(res);
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
