import * as S from 'pages/GameRoom/GraveComponent/GraveComponent.Style';
import { useRecoilValue } from 'recoil';
import { deadPlayerState } from 'recoil/atoms/gameState';
import { checkDeath } from 'utils/checkDeath';

function GraveComponent({ useNickname }) {
  const deadPlayers = useRecoilValue(deadPlayerState);

  return <S.GraveImage src={process.env.PUBLIC_URL + '/image/game/grave_image.svg'} />;
}

export default GraveComponent;
