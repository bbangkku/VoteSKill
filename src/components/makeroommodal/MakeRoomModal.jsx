import * as S from 'components/makeroommodal/MakeRoomModal.Style';
import { useState } from 'react';
import axios from 'axios';
import { Switch } from '@mui/material';
function MakeRoomModal() {
  const [customSessionId, setCustomSessionId] = useState('');
  const [password, setPassword] = useState('');
  const [boxChecked, setboxChecked] = useState(false);

  const API = axios.create({
    baseURL: 'http://localhost:3000',
  });

  const makeRoomPost = () => {
    const data = {
      name: customSessionId,
      password: password,
      // host: ,z
      people: [],
    };
    axios
      .post('http://localhost:8080/room', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBoxChecked = () => {
    if (boxChecked) {
      setboxChecked(false);
      setPassword('');
    } else {
      setboxChecked(true);
    }
  };

  const roomNameInfo = (event) => {
    setCustomSessionId(event.target.value);
  };

  const roomPassInfo = (event) => {
    setPassword(event.target.value);
  };

  return (
    <S.RoomMakeBackground>
      <S.RoomDiv>
        <S.InputLabel>방 이름</S.InputLabel>
        <S.InputBar type="text" onChange={roomNameInfo} placeholder="방 이름을 입력하세요"></S.InputBar>
      </S.RoomDiv>
      <S.RoomDiv>
        <S.InputLabel>
          비밀번호
          <Switch checked={boxChecked} onChange={handleBoxChecked} color="error" disableRipple="true" />
        </S.InputLabel>
        <S.InputBar
          disabled={!boxChecked}
          type="password"
          onChange={roomPassInfo}
          placeholder="비밀번호를 입력하세요"
        ></S.InputBar>
      </S.RoomDiv>
      <S.RoomCreateButton onClick={makeRoomPost}>방 생성 </S.RoomCreateButton>
    </S.RoomMakeBackground>
  );
}

export default MakeRoomModal;
