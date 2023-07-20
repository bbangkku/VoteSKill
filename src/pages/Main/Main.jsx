import Layout from 'components/layout/Layout';
import Modal from 'components/modal/Modal';
import UserInfo from 'components/userinfo/UserInfo';
import useModal from 'hooks/useModal';
import * as S from 'pages/Main/Main.Style';

function Main({ isMain }) {
  const { openModal } = useModal();
  return (
    <div>
      <Layout isMain={true}></Layout>
      <S.KakaoLoginButton onClick={openModal}></S.KakaoLoginButton>
      <Modal>
        <UserInfo />
      </Modal>
    </div>
  );
}

export default Main;
