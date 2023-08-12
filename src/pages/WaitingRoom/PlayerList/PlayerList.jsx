import { useEffect, useState } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import { useRecoilState } from 'recoil';
import { roomState } from 'recoil/atoms/roomState';
import gameAPI from 'apis/gameAPI';

function PlayerList({ subscribers, publisher, roleData, setInGame, sessionId }) {
  const [userList, setUserList] = useState([]);
  const [host, setHost] = useRecoilState(roomState);
  const { openModal: openUserInfo } = useModal('UserInfo');

  useEffect(() => {
    setUserList(subscribers);
  }, [subscribers]);

  useEffect(() => {
    console.log('직업 배정', roleData);
    if (roleData) {
      setInGame(true);
    }
  }, [roleData]);

  const gameStart = async () => {
    try {
      const { status } = await gameAPI.startGame(sessionId);
    } catch (error) {
      console.log('게임시작 실패', error);
    }
  };

  const checkHost = () => sessionStorage.getItem('nickname') === host;

  return (
    <S.PlayerListWrapper>
      <S.Square>
        <S.Container key={publisher}>
          <span onClick={openUserInfo}>{JSON.parse(publisher.stream.connection.data).clientData}</span>
        </S.Container>
        {userList.map((sub, idx) => (
          <S.Container key={idx}>
            <span onClick={openUserInfo}>{JSON.parse(sub.stream.connection.data).clientData}</span>
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton>EXIT</S.OutButton>
        {checkHost() && <S.StartButton onClick={gameStart}>START</S.StartButton>}
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
