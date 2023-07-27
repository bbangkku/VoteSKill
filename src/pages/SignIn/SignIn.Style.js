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

export const NickName = styled.input`
  width: 40rem;
  height: 6vh;
  margin: auto;
  font-size: 2em;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  background-image: radial-gradient(at 50% 50%, hsla(17, 62%, 65%, 1) 0px, transparent 50%);
  /* radial-gradient(at 9% 32%, hsla(222, 75%, 60%, 1) 0px, transparent 50%); */
  border: none;
  border-radius: 3px;
  position: absolute;
  top: 70%;
  left: 38%;
  font-family: 'Dokdo', cursive;
  box-shadow: 2px 2px 8px 1px red;
`;
export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Shrikhand';
  background-color: red;
`;

export const Button = styled.button`
  width: 16rem;
  height: 7vh;
  margin: 0 auto;
  color: tomato;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #bf4f74;
  border-radius: 15px;
  box-shadow: 3px 2px 2px 2px red;

  &.grow {
    background-color: ${({ theme }) => theme.color.red};
  }
  position: absolute;
  top: 80%;
  left: 46%;
  font-family: 'Dokdo', cursive;
`;
