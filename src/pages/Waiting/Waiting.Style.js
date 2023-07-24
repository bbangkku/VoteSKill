import styled from 'styled-components';

export const Total = styled.div`
  display: flex;
`;

export const Square = styled.div`
  width: 50%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  padding: 40px;
  /* background-color: yellow; */
  border: 30px solid gold;
`;

export const Container = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Shrikhand';
  background-color: red;
`;

export const OutButton = styled.button`
  background-color: ${({ theme }) => theme.color.lightgray};
  font-size: 11px;
  padding: 0.3em 0.5em;
  border-radius: 6px;
`;

export const Chat = styled.div`
  width: 50%;
  background-color: #ece6cc;
  display: flex;
  flex-direction: column;
`;

export const SendContainer = styled.div`
  margin: 30px;
  padding: 30px;
  background-color: green;
  flex: 95%;
`;

export const BottomBar = styled.div`
  flex: 5%;
  display: flex;
  width: 100%;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const InputBar = styled.input`
  font-size: 20px;
  background: white;
  border-radius: 10px;
  width: 90%;

  border: 1px solid black;
`;

export const SendButton = styled.button`
  flex: 10%;
  background-color: ${({ theme }) => theme.color.lightgray};

  border-radius: 6px;
`;
