import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

export const Bottom = styled.div`
  /* background-color: yellow; */
  bottom: 0%;
  height: 15%;
  width: 100%;
  position: absolute;
  text-align: center;
`;
export const MakeRoomButton = styled.button`
  background-image: linear-gradient(to bottom, red, pink);
  font-size: 35px;
  font-family: 'Dokdo', cursive;
  border: 4px solid red;
  border-radius: 7px;
`;
