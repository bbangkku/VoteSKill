import React, { useState } from 'react';
import Layout from 'components/layout/Layout';
import * as S from 'pages/SignIn/SignIn.Style';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');
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
    <div>
      <Layout isMain={false} />
      <div>
        <S.Textarea size="60" placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}></S.Textarea>
        <br />
        <S.Button
          type="submit"
          className={isHovering ? 'grow' : ''}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Go To KILL
        </S.Button>
      </div>
    </div>
  );
}

export default SignIn;
