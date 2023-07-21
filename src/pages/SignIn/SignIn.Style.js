import styled from 'styled-components';

export const Button = styled.button`
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

export const Textarea = styled.input`
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
export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Shrikhand';
  background-color: red;
`;
