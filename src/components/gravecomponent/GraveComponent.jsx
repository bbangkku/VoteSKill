import * as S from 'components/gravecomponent/GraveComponent.Style';

function GraveComponent() {
  return <S.GraveImage src={process.env.PUBLIC_URL + '/image/game/grave_image.svg'}></S.GraveImage>;
}

export default GraveComponent;
