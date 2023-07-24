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
  background-color: skyblue;
  width: 1250px;
  height: 250px;
  margin: 60px 50px 60px 50px;
  display: flex;
  justify-content: space-between;
`;
export const Screen = styled.div`
  background-color: blue;
  width: 300px;
  height: 250px;
  left: 10%;
  border-radius: ${theme.borderRadius.l};
  border: 5px solid ${theme.day.start};
`;
