import * as S from './Header.Style';
import { HiQuestionMarkCircle, HiOutlineUserCircle } from 'react-icons/hi';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo src={process.env.PUBLIC_URL + '/image/logo.svg'} />
      <S.HeaderButtonList>
        <HiQuestionMarkCircle size={'70%'} color="#828282" />
        <HiOutlineUserCircle size={'70%'} color="#828282" />
      </S.HeaderButtonList>
    </S.HeaderWrapper>
  );
}
export default Header;
