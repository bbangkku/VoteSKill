import React, { useState } from "react";

function SignIn() {
  const [placeholder, setPlaceholder] = useState("닉네임을 입력하세요.");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("닉네임을 입력하세요.");
  };

  return (
    <div>
        <textarea
          className="Nickname_input"
          size="60"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="Nickname_input"
        ></textarea>

      <button type="submit">회원가입</button>
    </div>
  );
}

export default SignIn;
