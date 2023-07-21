import * as S from 'components/layout/Layout.Style';

function Layout({ isMain, children }) {
  return (
    <S.Background isNight={true}>
      {isMain && <S.MainLogo src={process.env.PUBLIC_URL + '/image/logo.svg'} alt="voteskill" />}
      {children}
      <S.BackgroundImage src={process.env.PUBLIC_URL + '/image/city_background.svg'} />
    </S.Background>
  );
}

export default Layout;
