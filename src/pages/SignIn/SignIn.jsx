import React, { useState } from 'react';
import Layout from "components/layout/Layout";
import * as S from 'pages/SignIn/SignIn.Style';
import * as L from 'components/layout/Layout.Style';

function SignIn({isMain}) {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('닉네임을 입력하세요.');
  };

  return (
    <div>
      <Layout/>
      <div>
        {<L.MainLogo src={process.env.PUBLIC_URL + '/image/voteskill_logo.png'} alt="voteskill" />}

        <S.textarea size="60" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.textarea>
        <br />
        <S.button type="submit">Go To KILL</S.button>
      </div>
      
    </div>
  );
}

export default SignIn;
