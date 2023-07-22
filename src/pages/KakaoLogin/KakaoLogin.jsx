import userAPI from 'apis/userAPI';
import { useEffect } from 'react';

function KakaoLogin() {
  useEffect(() => {
    const getToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const res = await userAPI.kakaoLogin(code);
      console.log(res);
    };
    getToken();
  }, []);

  return <h1>여기는 카카오 로그인을 처리하는 임시 페이지</h1>;
}

export default KakaoLogin;
