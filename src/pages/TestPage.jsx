import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import { styled } from 'styled-components';
import { KAKAO_AUTH_URL } from 'utils/kakaoLogin';

function TestPage() {
  const clickLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Layout>
      <Header />
      <TestButton onClick={clickLogin}>login test</TestButton>
    </Layout>
  );
}
const TestButton = styled.button`
  padding: 20px 40px;
  color: whitesmoke;
`;

export default TestPage;
