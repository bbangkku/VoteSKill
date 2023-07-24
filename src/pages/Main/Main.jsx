import Layout from 'components/layout/Layout';
import * as S from 'pages/Main/Main.Style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [isSign, setSign] = useState(false);

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
      navigate('/lobby');
    } else {
      navigate('/signin');
    }
  };

  return (
    <Layout isMain={true}>
      <S.KakaoLoginButton onClick={navigateToLobby}></S.KakaoLoginButton>
    </Layout>
  );
}

export default Main;
