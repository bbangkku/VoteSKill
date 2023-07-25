import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

export const RoomSquare = styled.div`
  height: 60vh;
  display: grid;
  /* place-items: center; */
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 150px;
  row-gap: 30px;
  padding: 40px;
  /* background-color: yellow; */
  border: 10px solid #a0d1f7;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const RoomContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const People = styled.div``;

export const Logo = styled.img`
  height: 15px;
`;
