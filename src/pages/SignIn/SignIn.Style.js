import styled from 'styled-components';

// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

// <head> 요소에 <link> 태그 추가
document.head.appendChild(link);

export const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* margin-top: 50%; */
`;

export const Textarea = styled.input`
  width: 40rem;
  height: 6vh;
  margin: auto;
  font-size: 2em;
  text-align: center;
  color: ${(props) => props.$inputColor || 'red'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  position: absolute;
  top: 70%;
  left: 38%;
  font-family: 'Dokdo', cursive;
`;
export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Shrikhand';
  background-color: red;
`;

export const Button = styled.button`
  width: 15rem;
  height: 7vh;
  margin: 0 auto;
  color: tomato;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  &.grow {
    background-color: ${({ theme }) => theme.color.red};
  }
  position: absolute;
  top: 80%;
  left: 46%;
  font-family: 'Dokdo', cursive;
`;
