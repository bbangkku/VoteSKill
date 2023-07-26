import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&family=REM&display=swap';
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

export const InputRoomName = styled.input`
  width: 30rem;
  height: 7vh;
  /* margin: 0 auto; */
  font-size: 1.2em;
  text-align: center;
  background: greenyellow;
  border: none;
  border-radius: 5px;
  opacity: 0.3; /* 80% 불투명도 */
`;
// export const Button = styled.button`
//   width: 15rem;
//   height: 5vh;
//   color: tomato;
//   font-size: 1.1em;
//   justify-content: center;
//   align-items: center;
//   border: 3px solid #bf4f74;
//   border-radius: 5px;
//   &.grow {
//     background-color: ${({ theme }) => theme.color.red};
//   }
// `;

export const LevelCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 40%;
  margin-right: 40%;
`;
//
//
//
//
//

export const SearchBarWrapper = styled.form`
  display: flex;
  justify-content: center;
  input {
    transition: all 0.3s ease-out;
  }
  input:focus,
  input:valid {
    width: 20%;
    background: grey;
    box-shadow: 0 0 0 0.1em yellow inset;
    outline: transparent;
  }
`;

export const SearchInput = styled.input`
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  box-shadow: 0 0 0 20em pink inset;
  transform: scale(1);
  text-align: center;
  font-family: 'REM', sans-serif;
`;
