import * as S from 'components/layout/Layout.Style';
import useLayoutChange from 'hooks/useLayoutChange';

function Layout({ isMain, children }) {
  const { layout } = useLayoutChange();
  return (
    <S.Background $layout={layout}>
      {isMain && <S.MainLogo src={process.env.PUBLIC_URL + '/image/logo.svg'} alt="voteskill" />}
      {children}
    </S.Background>
  );
}

export default Layout;
