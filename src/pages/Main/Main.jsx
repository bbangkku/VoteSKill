import Layout from 'components/layout/Layout';
import * as S from 'pages/Main/Main.Style';

function Main({ isMain }) {
  return (
    <Layout isMain={true}>
      <S.KakaoLoginButton></S.KakaoLoginButton>
    </Layout>
  );
}

export default Main;
