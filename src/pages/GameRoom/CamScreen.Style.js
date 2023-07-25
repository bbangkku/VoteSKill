import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CamScreen = styled.div`
  background-color: blue;
  width: 300px;
  height: 250px;
  left: 10%;
  border-radius: ${theme.borderRadius.l};
  border: 5px solid ${theme.day.start};
`;
