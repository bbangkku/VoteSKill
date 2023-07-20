import Modal from 'components/modal/Modal';
import * as S from 'components/userinfo/UserInfo.Style';

function UserInfo() {
  return (
    <div>
      <S.UserInfoBackground>
        <S.Profile src={process.env.PUBLIC_URL + '/image/userinfo/Profile.svg'} alt="Profile" />
        <S.InputArea>
          <Input label="닉네임" isFix={true}></Input>
          <Input label="승률" isFix={false}></Input>
        </S.InputArea>
      </S.UserInfoBackground>
    </div>
  );
}

function Input({ label, isFix }) {
  return (
    <div>
      <S.Label>{label} : </S.Label>
      <S.Input type="text" readOnly></S.Input>
      {isFix && <S.NicknameFixIcon></S.NicknameFixIcon>}
    </div>
  );
}
export default UserInfo;
