import * as S from 'components/layout/Layout.Style';

<<<<<<< HEAD
function Layout({isMain}){
    return (
        <div>
            <S.Background>
                {/* {isMain ? <S.MainLogo></S.MainLogo> : null} */}
                {isMain && <S.MainLogo src={process.env.PUBLIC_URL + '/image/voteskill_logo.png'} alt="voteskill" />}
            </S.Background>
        </div>
    );
=======
function Layout({ isMain }) {
  return (
    <div>
      <S.Background>
        {/* {isMain ? <S.MainLogo></S.MainLogo> : null} */}
        {isMain && <S.MainLogo />}
      </S.Background>
    </div>
  );
>>>>>>> 08db3ae25106f17a4200d353d2076d641ee298c5
}

export default Layout;
