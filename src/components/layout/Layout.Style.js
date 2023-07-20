import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/image/city_background.svg'});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 100%;
  position: fixed;
`;

export const MainLogo = styled.img`
  position: absolute;
  width: 500px;
  height: 210px;
  top: 18%;
  left: 35%;
`;
