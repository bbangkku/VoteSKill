import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled, keyframes, css } from 'styled-components';
import { theme } from '../../styles/theme';

const SlideLeft = keyframes`
  from { transform: translateX(-300px); }
  to { transform: translateX(0px); }
`;

const SlideRight = keyframes`
  from { transform: translateX(300px); }
  to { transform: translateX(0px); }
`;

export const JobIntroduceBackground = styled.div`
  width: 700px;
  height: 400px;
  /* position: absolute; */
  /* 다른 스타일들을 여기에 작성하세요 */
  background-color: ${(props) => (props.isRed ? '#ff4742' : props.theme.color.blue)};
  display: flex;
  flex-direction: column;
`;
export const Job = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;
export const ModalContent = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.2s ease;
  animation: ${({ active }) => (active ? SlideLeft : SlideRight)} 0.3s ease-in-out;
`;
export const JobImg = styled.img`
  width: 400px;
  height: 320px;
  margin-top: 10px;
  margin-left: 30px;
`;

export const JobIntroduceDiv = styled.div`
  font-size: 10px;
  margin-top: 60px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
`;
export const JobName = styled.div`
  font-size: 30px;
  /* margin-top: 100px; */
`;
export const JobDescription = styled.div`
  font-size: 15px;
  margin-top: 60px;
`;
export const ButtonArea = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
export const ScrollButtonLeft = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 40px;
  background-image: url(${process.env.PUBLIC_URL + '/left.png'});
  background-size: cover;
  display: inline-block;
  /* animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; */
`;
export const ScrollButtonRight = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 40px;

  /* animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; */

  background-image: url(${process.env.PUBLIC_URL + '/right.png'});
  background-size: cover;
  display: inline-block;
`;
