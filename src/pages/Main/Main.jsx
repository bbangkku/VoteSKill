import Layout from 'components/layout/Layout';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import * as S from 'pages/Main/Main.Style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Day from 'components/game/Day';

function Main() {
  const [isSign, setSign] = useState(false);

  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드 회원가입 여부 가져옴
    // if (~){
    setSign(true);
    // }
    // else{
    //   setSign(false);
    //   Header(isSign);
    // }
  });

  const navigateToLobby = () => {
    if (isSign) {
      setSign(true);
      //navigate('/game/:1');
    } else {
      navigate('/signin');
    }
  };
  // onClick={navigateToLobby}
  return (
    <Layout isMain={true}>
      <S.KakaoLoginButton onClick={openModal}></S.KakaoLoginButton>
      <Modal>
        <Day />
      </Modal>
    </Layout>
  );
}

export default Main;
