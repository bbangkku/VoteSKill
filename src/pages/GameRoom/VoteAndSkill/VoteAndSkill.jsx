import { useRecoilState, useRecoilValue } from 'recoil';
import { KillVote, SkillImage } from './VoteAndSkill.style';
import { checkDeath } from 'utils/checkDeath';
import { deadPlayerState, isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';

function VoteAndSkill({ useNickname, imageOn, myRole }) {
  const isVoteTime = useRecoilValue(isVoteTimeState);
  const isSkillTime = useRecoilValue(isSkillTimeState);

  const checkVote = () => imageOn === useNickname;

  const deadPlayers = useRecoilState(deadPlayerState);

  const deathMember = checkDeath(deadPlayers, useNickname);

  if ((isVoteTime || isSkillTime) && !deathMember && checkVote()) {
    let skillImageSrc = '';
    if (isSkillTime && myRole) {
      skillImageSrc = `/image/game/skill_${myRole.toLowerCase()}.svg`;
    }

    return (
      <>
        {isVoteTime && <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} />}
        {isSkillTime && myRole && <SkillImage src={process.env.PUBLIC_URL + skillImageSrc} />}
      </>
    );
  }
  return null;
}

export default VoteAndSkill;
