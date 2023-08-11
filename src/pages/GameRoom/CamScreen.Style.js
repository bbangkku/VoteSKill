import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CamScreen = styled.div`
  border-radius: ${theme.borderRadius.l};
  width: 190px;
  height: 190px;
  position: relative;
`;

export const VideoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 400px);
  grid-template-columns: repeat(3, 500px);
  align-items: center;
`;

export const VideoComponent = styled.div`
  width: 190px;
  height: 190px;
  z-index: 1;
`;

export const UserId = styled.span`
  font-size: xx-large;
  color: white;
  z-index: 1;
`;

export const KillVote = styled.img`
  position: absolute;
  z-index: 3;
  width: 250px;
  height: 250px;
  /* visibility: ${(props) => (props === false ? 'hidden' : 'visible')}; */
`;

export const CustomScreen = styled.video`
  border-radius: 50%;
  width: 190px;
  height: 190px;
  display: block;
`;

export const JoinInput = styled.input`
  border-radius: 20px;
  border: 3px solid black;
  padding: 5px;
  font-size: large;
`;

export const VoteImage = styled.img`
  width: 250px;
  height: 250px;
  position: fixed;
`;
