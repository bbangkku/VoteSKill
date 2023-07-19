import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import * as S from 'pages/Main/Main.Style';

function Main() {
  const { openModal } = useModal();
  return (
    <S.MainContainer>
      <S.MainLogo></S.MainLogo>
      <S.KakaoLoginButton onClick={openModal}></S.KakaoLoginButton>
      <Modal></Modal>
    </S.MainContainer>
  );
}

export default Main;
