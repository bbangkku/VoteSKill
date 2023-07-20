import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const UserInfoBackground = styled(ModalBody)`
  background-color: ${theme.color.darkgray};
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 3;
  align-items: center;
`;

export const Profile = styled.img`
  width: 200px;
  height: 170px;
  border-radius: 20px;
  margin: 5px;
`;
export const InputArea = styled.div`
  background: black;
  height: 100%;
  padding: 20px;
  margin: 10px;
  font-size: 32px;
  color: white;
  border-radius: 20px;
`;

export const Label = styled.label`
  padding: 5px;
`;

export const Input = styled.input`
  display: inline;
  width: 270px;
  padding: 9px;
  margin: 6px;
`;
export const NicknameFixIcon = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${process.env.PUBLIC_URL + '/image/userinfo/nickname_fix_icon.svg'});
  background-size: cover;
  display: inline-block;
`;
