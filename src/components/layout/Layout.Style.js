import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${process.env.PUBLIC_URL}/image/city_background.svg),
    linear-gradient(
      to top,
      ${(props) =>
        props.$layout.Day
          ? props.theme.day.start
          : props.$layout.Mafia
          ? props.theme.night.start
          : props.theme.color.blue},
      ${(props) => (props.$layout.Day ? props.theme.day.end : props.theme.night.end)} 80%
    );
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

//      ${(props) => (props.$layout.Day ? props.theme.day.start : props.theme.night.start)},
//       ${(props) => (!props.$layout.Day && props.$layout.Mafia ? props.theme.night.end : props.theme.day.end)} 80%,

export const BackgroundImage = styled.img`
  width: 100vw;
  bottom: 0;
`;

export const MainLogo = styled.img`
  position: absolute;
  width: 400px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(1px 2px 10px #000);
`;
