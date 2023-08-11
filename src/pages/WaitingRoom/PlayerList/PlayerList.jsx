import { useEffect, useState } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import { useNavigate, useParams } from 'react-router-dom';

function PlayerList({ subscribers }) {
  const sessionId = useParams();
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const { openModal: openUserInfo } = useModal('UserInfo');

  useEffect(() => {
    getNameList(subscribers);
  }, [subscribers]);

  const getNameList = (subscribers) => {
    const nameList = subscribers.map((sub) => JSON.parse(sub.stream.connection.data).clientData);
    setUserList(nameList);
  };

  const gameStart = () => {
    navigate(`/game/${sessionId.sessionId}`, {
      state: { sessionId: sessionId.sessionId },
    });
  };

  return (
    <S.PlayerListWrapper>
      <S.Square>
        {userList.map((item) => (
          <S.Container key={item}>
            {/* () => openModal(userIdx[index]) */}
            <span onClick={openUserInfo}>{item}</span>
            {/* {item === Master && <S.Logo src={process.env.PUBLIC_URL + '/crown.png'} />} */}
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton>EXIT</S.OutButton>
        <S.StartButton onClick={gameStart}>START</S.StartButton>
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
