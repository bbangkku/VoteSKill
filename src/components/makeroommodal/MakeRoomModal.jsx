import Modal from 'components/modal/Modal';
import * as S from 'components/makeroommodal/MakeRoomModal.Style';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MakeRoomModal() {
  return (
    <div>
      <S.UserInfoBackground>
        <SelectRoomName></SelectRoomName>
      </S.UserInfoBackground>
    </div>
  );
}

// Parent
function SelectRoomName() {
  const API = axios.create({
    baseURL: 'http://localhost:3000',
  });

  const [roomName, setRoomName] = React.useState('');
  const [roomPassword, setRoomPassword] = React.useState('');
  // const [levels, setLevels] = React.useState('');
  const [boxChecked, setboxChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setboxChecked(!boxChecked);
  };
  const roomNameInfo = (event) => {
    setRoomName(event.target.value);
    console.log(event.target.value);
  };
  const roomPassInfo = (event) => {
    setRoomPassword(event.target.value);
  };
  const saveRoomInfo = (event) => {
    setRoomName(event.target.value);
    setRoomPassword(event.target.value);
  };
  const onClick = (item) => {
    // console.log(roomName);
    // console.log(roomPassword);
    const requestData = {
      roomname: roomName,
      roompassword: roomPassword,
      // levels: roomLevels,
    };
    window.location.href = 'waitingroom';

    // // 방 정보 백엔드로 보내기
    // axios
    //   .post('http://localhost:8000/rooms', requestData)
    //   .then((response) => {
    //     // 요청이 성공한 경우에 실행되는 부분
    //     console.log(response.data);
    //     window.location.href = 'waitingroom';
    //   })
    //   .catch((error) => {
    //     // 요청이 실패한 경우에 실행되는 부분
    //     console.error(error);
    //   });
  };
  return (
    <div>
      <S.RoomDiv>방제목</S.RoomDiv>
      <S.InputBar onChange={roomNameInfo}></S.InputBar>
      <br />
      <br />
      <S.RoomDiv>비밀번호</S.RoomDiv>
      <S.InputBar
        type="password"
        id="password"
        name="password"
        className="input-pw"
        onChange={roomPassInfo}
        disabled={!boxChecked}
        placeholder="패스워드를 입력하세요"
      ></S.InputBar>
      <input type="checkbox" checked={boxChecked} onChange={handleCheckboxChange} />
      <br />
      <br />
      <S.LevelCheckDiv>
        <input type="checkbox" id={1} />
        <S.CheckText>초보</S.CheckText>
        <input type="checkbox" id={2} />
        <S.CheckText>중수</S.CheckText>
        <input type="checkbox" id={3} />
        <S.CheckText>고수</S.CheckText>
        <br />
        <br />
      </S.LevelCheckDiv>
      <br />
      <br />
      <S.MakeRoomButton2 onClick={() => onClick()}>방 생성 </S.MakeRoomButton2>
    </div>
  );
}

export default MakeRoomModal;
