import React, { useState } from 'react';
import * as S from 'pages/SignIn/SignIn.Style';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('닉네임을 입력하세요.');
  };

  return (
    <div>
      <S.MainContainer>
        <img src="/voteskill_logo.svg"></img>
      </S.MainContainer>

      <div>
        <S.textarea size="60" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.textarea>
        <br />
        <S.button type="submit">Go To KILL</S.button>
      </div>
    </div>
  );
}

export default SignIn;
