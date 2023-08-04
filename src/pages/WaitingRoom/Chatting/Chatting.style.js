import { styled } from 'styled-components';

export const Chat = styled.div`
  width: 50%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChattingContainer = styled.div`
  height: 470px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.color.lightgray};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ChattingDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ $mymessage }) => ($mymessage ? 'end' : 'start')};
`;

export const MessageBox = styled.div`
  margin: 10px 0;
  max-width: 40%;
  padding: 10px;
  overflow-wrap: break-word;
  text-align: ${({ $mymessage }) => ($mymessage ? 'end' : 'start')};
  background-color: ${({ theme, $mymessage }) => ($mymessage ? theme.color.gray : theme.color.brown)};
  color: ${({ theme, $mymessage }) => ($mymessage ? theme.color.lightgray : theme.color.lightgray)};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 1px 1px 2px black;
`;

export const BottomBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputBar = styled.input`
  padding: 10px;
  font-size: 16px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  width: 90%;
`;

export const SendButton = styled.button`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
`;
