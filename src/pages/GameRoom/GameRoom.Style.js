import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ScreenWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: beige;
  position: absolute;
  left: 10%;
`;
export const ScreenGroup = styled.div`
  // 비디오로 바뀌기전 공간
  width: 300px;
  height: 200px;
  border: 1px solid black;
  background-color: skyblue;
  width: 1250px;
  height: 250px;
  margin: 60px 50px 60px 50px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const PreVideoArea = styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid black;
`;
