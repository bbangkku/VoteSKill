import styled, { keyframes } from 'styled-components';

export const JobAssignModalBody = styled.div`
  width: 800px;
  height: 600px;
  z-index: 999;
  position: fixed;
  background: linear-gradient(
    to top,
    ${(props) =>
      props.layout.Day ? props.theme.day.start : props.layout.Mafia ? props.theme.night.start : props.theme.color.blue},
    ${(props) => (props.layout.Day ? props.theme.day.end : props.theme.night.end)} 80%
  );
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  transform: translate(35%, -30%);
  animation: ${(props) => (props.showJobModal ? fadeIn : fadeOut)} 0.15s ease-out;
`;

export const JobImage = styled.img`
  margin-top: 20px;
  height: 70%;
`;

export const JobAssignText = styled.div`
  margin-top: 50px;
  height: 45px;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
`;

export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const fadeOut = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;
