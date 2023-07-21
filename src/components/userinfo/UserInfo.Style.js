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
  padding: 20px 5px 20px 20px;
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
  width: 250px;
  padding: 9px 3px 9px 3px;
  margin: 6px;
`;
export const NicknameFixIcon = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${process.env.PUBLIC_URL + '/image/userinfo/nickname_fix_icon.svg'});
  background-size: cover;
  display: inline-block;
`;

export const RankIcon = styled.label`
  background-color: #4d82c1;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;
