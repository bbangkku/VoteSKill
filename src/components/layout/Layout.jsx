import * as S from "components/layout/Layout.Style";

function Layout({isMain}){
    return (
        <div>
            <S.Background>
                {/* {isMain ? <S.MainLogo></S.MainLogo> : null} */}
                {isMain && <S.MainLogo/>}
            </S.Background>
        </div>
    );
}


export default Layout;