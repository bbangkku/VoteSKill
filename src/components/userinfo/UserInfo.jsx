import Modal from 'components/modal/Modal';
import * as S from 'components/userinfo/UserInfo.Style';
import React, { useState, useEffect } from 'react';

function UserInfo() {
  return (
    <div>
      <S.UserInfoBackground>
        <S.Profile src={process.env.PUBLIC_URL + '/image/userinfo/Profile.svg'} alt="Profile" />
        <S.InputArea>
          <NickName></NickName>
          <WinRate></WinRate>
        </S.InputArea>
      </S.UserInfoBackground>
    </div>
  );
}

// Parent
function NickName() {
  const [nickname, setNickname] = useState('튀튀');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // 백엔드 닉네임 불러옴
    setNickname('어몽어스');
  }, []);

  // input 활성화
  const onUpdateClick = () => {
    if (update) {
      setUpdate(false);
    } else {
      setUpdate(true);
    }
  };

  const onChange = (event) => {
    // input 값 가져오기, state값 수정
    setNickname(event.target.value);
    // 백엔드 전송
  };

  return (
    <div>
      <S.Label>닉네임 : </S.Label>
      {update ? (
        <S.NicknameInput onChange={onChange} value={nickname}></S.NicknameInput>
      ) : (
        <S.NicknameSpan>{nickname}</S.NicknameSpan>
      )}
      <NickNameUpdate onUpdateClick={onUpdateClick}></NickNameUpdate>
    </div>
  );
}

// Child
function NickNameUpdate({ onUpdateClick }) {
  return (
    <S.NicknameFixIcon
      onClick={() => {
        onUpdateClick();
      }}
    ></S.NicknameFixIcon>
  );
}

function WinRate() {
  // 백엔드에서 승, 패 정보 받기
  const [rank, setRank] = useState('unrated');
  const [rate, setRate] = useState({ win: 0, lose: 0, rate: 0.0 });

  const winRateRank = (winRate) => {
    if (0 <= winRate && winRate < 40) {
      setRank('초보');
    } else if (40 <= winRate && winRate < 50) {
      setRank('중수');
    } else if (winRate >= 50) {
      setRank('고수');
    } else {
      setRank('unrated');
    }
  };
  useEffect(() => {
    // 백엔드로 부터 승, 패 받아오기
    setRate({ win: 70, lose: 30, rate: Math.round((70 / (70 + 30)) * 100) });
  }, []);

  useEffect(() => {
    winRateRank(rate.rate);
  }, [rate]);

  return (
    <div>
      <S.Label>승률 : </S.Label>
      <S.WinRateSpan>
        {rate.win + rate.lose}전 {rate.win}승 {rate.lose}패
      </S.WinRateSpan>

      {rank === '초보' && <S.BeginnerIcon>{rank}</S.BeginnerIcon>}
      {rank === '중수' && <S.ImmediateIcon>{rank}</S.ImmediateIcon>}
      {rank === '고수' && <S.ExpertIcon>{rank}</S.ExpertIcon>}
    </div>
  );
}

export default UserInfo;
