import React, { useState, useCallback } from 'react';
import Layout from 'components/layout/Layout';
import * as S from 'pages/SignIn/SignIn.Style';

function SignIn() {
  const [placeholder, setPlaceholder, setState] = useState('닉네임을 입력하세요.');
  const [isHovering, setIsHovering] = useState(false);

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('닉네임을 입력하세요.');
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Layout></Layout>
      <div>
        <S.textarea size="60" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.textarea>
        <br />
        <S.button
          type="submit"
          className={isHovering ? 'grow' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Go To KILL
        </S.button>
      </div>
    </>
  );
}

export default SignIn;
