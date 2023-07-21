import * as S from 'components/layout/Layout.Style';
import useDayChange from 'hooks/useDayChange';

function Layout({ isMain, children }) {
  const { isNight } = useDayChange();

  return (
    <S.Background isNight={isNight}>
      {isMain && <S.MainLogo src={process.env.PUBLIC_URL + '/image/logo.svg'} alt="voteskill" />}
      {children}
      <S.BackgroundImage src={process.env.PUBLIC_URL + '/image/city_background.svg'} />
    </S.Background>
  );
}

export default Layout;
