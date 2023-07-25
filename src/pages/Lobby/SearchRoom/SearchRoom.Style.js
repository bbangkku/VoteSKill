import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

export const InputRoomName = styled.input`
  width: 30rem;
  height: 7vh;
  /* margin: 0 auto; */
  font-size: 1.2em;
  text-align: center;
  background: greenyellow;
  border: none;
  border-radius: 5px;
  opacity: 0.4; /* 80% 불투명도 */
`;
export const Button = styled.button`
  width: 15rem;
  height: 5vh;
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
