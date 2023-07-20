import Layout from 'components/layout/Layout';
import * as S from 'pages/Main/Main.Style';

function Main(props, { isMain }) {
  return (
    <div>
      <Layout isMain={true}></Layout>
      <S.KakaoLoginButton></S.KakaoLoginButton>
    </div>
  );
}

export default Main;
