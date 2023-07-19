import { styled } from 'styled-components';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalBody = styled.div`
  background-color: white;
  min-width: 700px;
  max-width: 800px;
  min-height: 400px;
  max-height: 500px;
  border-radius: ${(props) => props.theme.borderRadius.s};
  padding: 10px;
`;

export const ModalExitButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
`;
