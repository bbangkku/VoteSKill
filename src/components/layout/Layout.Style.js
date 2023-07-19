import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/image/city_background.svg'});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 100%;
`;

export const MainLogo = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/image/voteskill_logo.svg'});
  background-repeat: no-repeat;
  background-size: 79% 100%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 10%;
`;
