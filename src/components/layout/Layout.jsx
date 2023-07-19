import * as S from "components/layout/Layout.Style";

function Layout({isMain}){
    return (
        <div>
            <S.Background>
                {/* {isMain ? <S.MainLogo></S.MainLogo> : null} */}
                {isMain && <S.MainLogo src={process.env.PUBLIC_URL + '/image/voteskill_logo.png'} alt="voteskill" />}
            </S.Background>
        </div>
    );
}


export default Layout;