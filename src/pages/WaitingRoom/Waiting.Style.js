import styled from 'styled-components';

export const Total = styled.div`
  display: flex;
`;

export const Square = styled.div`
  /* width: 120px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: grey;
  display: inline-block; */
  width: 50%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 200px;
  padding: 30px;
  width: 800px;
  height: 800px;
  /* background-color: yellow; */
`;

export const Container = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Shrikhand';
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  margin: 5px;
  background-color: white;
  border: 1px solid black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  /* border: ${({ theme }) => theme.color.red}; */
  background-color: ${({ theme }) => theme.color.lightgray};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
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
  flex: 90%;
`;

export const InputBar = styled.input`
  /* height: 4vh; */
  font-size: 2em;
  background: white;
  border-radius: 10px;
  width: 90%;

  border: 1px solid black;
`;
export const LargeButton = styled(StyledButton)``;

export const Enter = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  justify-content: space-between;
`;
