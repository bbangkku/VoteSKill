import Modal from 'components/modal/Modal';
import * as S from 'components/makeroommodal/MakeRoomModal.Style';
import React, { useState, useEffect } from 'react';

function MakeRoomModal() {
  return (
    <div>
      <S.UserInfoBackground>
        <SelectRoomName></SelectRoomName>
        <LevelCheck />
        <S.MakeRoomButton2>방 생성 </S.MakeRoomButton2>
      </S.UserInfoBackground>
    </div>
  );
}

// Parent
function SelectRoomName() {
  return (
    <div>
      <S.RoomDiv>방제목</S.RoomDiv>
      <S.InputBar></S.InputBar>
      <br />
      <br />
      <S.RoomDiv>비밀번호</S.RoomDiv>
      <S.InputBar type="password" id="password" name="password" className="input-pw"></S.InputBar>
      <br />
      <br />
    </div>
  );
}

function LevelCheck() {
  return (
    <S.LevelCheckDiv>
      <input type="checkbox" />
      <S.CheckText>게임중</S.CheckText>
      <input type="checkbox" />
      <S.CheckText>초보</S.CheckText>
      <input type="checkbox" />
      <S.CheckText>중수</S.CheckText>
      <input type="checkbox" />
      <S.CheckText>고수</S.CheckText>
      <br />
      <br />
    </S.LevelCheckDiv>
  );
}

export default MakeRoomModal;
