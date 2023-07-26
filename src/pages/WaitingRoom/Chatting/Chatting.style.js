import { styled } from 'styled-components';

export const Chat = styled.div`
  width: 50%;
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

export const StartButton = styled.button`
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  &:hover {
    background: #fff;
    color: #1aab8a;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;
