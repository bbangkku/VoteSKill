import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 30rem;
  height: 75vh;
  margin: 0 auto;
  color: red;
  font-size: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const button = styled.button`
  width: 15rem;
  height: 7vh;
  margin: 0 auto;
  color: tomato;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  &.grow {
    background-color: ${({ theme }) => theme.color.red};
  }
`;

export const textarea = styled.input`
  width: 40rem;
  height: 6vh;
  margin: 0 auto;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.$inputColor || 'red'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
