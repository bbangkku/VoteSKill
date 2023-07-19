import Layout from "components/layout/Layout";
import * as S from "pages/Main/Main.Style";

function Main(){
    return(
        <Layout>
            <S.MainLogo></S.MainLogo>
            <S.KakaoLoginButton></S.KakaoLoginButton>
        </Layout>
    );
}


export default Main;