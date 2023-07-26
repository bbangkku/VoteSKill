import React, { useState, useEffect } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
function PlayerList() {
  const Items = ['병국', '석준', '정인', '채영', '종명', '종호'];
  // 인덱스를 먼저 찾아,, 그리고 인덱스에 해당하는 유저 정보 가져올 수 있도록

  const [userIdx, setUserIdx] = useState(Items);

  useEffect(() => {
    console.log(userIdx);
  });
  const { openModal } = useModal();

  const removeItem = (item) => {
    // console.log(`${item} 삭제`);
    const newuserIdx = userIdx.filter((data) => {
      console.log(data);
      return data !== item;
    });
    setUserIdx(newuserIdx);
  };

  return (
    <S.Square>
      {userIdx.map((item, index) => (
        <S.Container
          key={index + 1}
          style={{
            margin: '10px',
            backgroundColor: 'white',
            border: '10px solid black',
            borderRadius: '30px',
            textalign: 'center',
          }}
        >
          <div style={{ marginTop: '1rem' }} onClick={() => openModal(userIdx[index])}>
            {item}
          </div>

          <S.OutButton onClick={() => removeItem(item)}>강퇴</S.OutButton>
        </S.Container>
      ))}
    </S.Square>
  );
}

export default PlayerList;
