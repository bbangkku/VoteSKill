import styled from 'styled-components';

export const Background = styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/image/city_background.svg"});
    width: 100vw;
    height: 100vh;
    background-repeat : no-repeat;
    background-position: 50% 100%;
    background-size: 100%;
    position:fixed;
`;

export const MainLogo = styled.img`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;