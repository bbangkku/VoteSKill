import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';
// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
// 새로운 <link> 태그 생성

export const UserInfoBackground = styled(ModalBody)`
  background-color: ${theme.color.darkgray};
  width: 100%;
  height: 100%;
`;

export const MakeRoomButton2 = styled.button`
  background-image: linear-gradient(to bottom, red, pink);
  font-size: 30px;
  font-family: 'Dokdo', cursive;
  border: 4px solid red;
  border-radius: 7px;
  text-align: center;
`;

export const LevelCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 40%;
  margin-right: 40%;
`;

export const CheckText = styled.text`
  /* font: italic small-caps bold 16px/2 cursive; */
  word-break: keep-all;
  font-family: 'Gasoek One', sans-serif;
  color: green;
`;

export const InputBar = styled.input`
  font-size: 25px;
  background: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
  font-family: 'Gasoek One', sans-serif;
`;

export const RoomDiv = styled.div`
  font-size: 20px;
  color: #a164a1;
  font-family: 'Gasoek One', sans-serif;
`;
