import React, { useState } from 'react';
import * as S from 'pages/Lobby/MakeRoom/MakeRoom.Style';
import useModal from 'hooks/useModal';
import MakeRoomModal from 'components/makeroommodal/MakeRoomModal';
import Modal from 'components/modal/Modal';
import axios from 'axios';
function MakeRoom() {
  const { openModal } = useModal('MakeRoomModal');

  // 방 제목
  const [roomNameInput, setRoomNameInput] = React.useState('');
  // 방 비번
  const [roomPasswordInput, setRoomPasswordInput] = React.useState('');
  // 방 잠금
  const [boxChecked, setboxChecked] = React.useState(false);

  return (
    <S.Bottom>
      <S.MakeRoomButton onClick={openModal}>방만들기 </S.MakeRoomButton>
      <Modal id="MakeRoomModal">
        <MakeRoomModal
          roomNameInput={roomNameInput}
          setRoomNameInput={setRoomNameInput}
          roomPasswordInput={roomPasswordInput}
          setRoomPasswordInput={setRoomPasswordInput}
          boxChecked={boxChecked}
          setboxChecked={setboxChecked}
        />
      </Modal>
    </S.Bottom>
  );
}

export default MakeRoom;

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
