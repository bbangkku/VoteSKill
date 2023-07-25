import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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

export const Center = styled.div`
  /* background-color: blue; */
  position: relative;
  width: 100%;
  height: 100%;
  /* margin: 100px; */
  text-align: center;
`;

export const InputRoomName = styled.input`
  width: 30rem;
  height: 7vh;
  /* margin: 0 auto; */
  font-size: 1.2em;
  text-align: center;
  background: greenyellow;
  border: none;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 15rem;
  height: 5vh;
  /* margin: 0 auto; */
  color: tomato;
  font-size: 1.1em;
  justify-content: center;
  align-items: center;
  border: 3px solid #bf4f74;
  border-radius: 5px;
  &.grow {
    background-color: ${({ theme }) => theme.color.red};
  }
`;

export const LevelCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 40%;
  margin-right: 40%;
`;

export const RoomSquare = styled.div`
  height: 60vh;
  display: grid;
  /* place-items: center; */
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  padding: 40px;
  /* background-color: yellow; */
  border: 30px solid gold;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const RoomContainer = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Shrikhand';
  background-color: red;
  text-align: left;
`;

export const People = styled.div``;

export const Logo = styled.img`
  height: 10px;
`;
