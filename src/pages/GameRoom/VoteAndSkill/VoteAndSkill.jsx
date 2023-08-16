import { useRecoilState, useRecoilValue } from 'recoil';
import { KillVote, SkillImage } from './VoteAndSkill.style';
import { checkDeath } from 'utils/checkDeath';
import { deadPlayerState, isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';

function VoteAndSkill(props) {
  const isVoteTime = useRecoilValue(isVoteTimeState);
  const isSkillTime = useRecoilValue(isSkillTimeState);

  const checkVote = (sub) => props.imageOn === props.getNicknameTag(sub);

  const [deadPlayers] = useRecoilState(deadPlayerState);

  const deathMember = checkDeath(deadPlayers, props.getNicknameTag(props.streamManager));

  if (isVoteTime && !deathMember) {
    return (
      <>{checkVote(props.streamManager) && <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} />}</>
    );
  }

  if (isSkillTime && !deathMember) {
    return (
      <>
        {checkVote(props.streamManager) && props.myRole === 'MAFIA' && (
          <SkillImage src={process.env.PUBLIC_URL + '/image/game/skill_mafia.svg'} />
        )}
        {checkVote(props.streamManager) && props.myRole === 'POLICE' && (
          <SkillImage src={process.env.PUBLIC_URL + '/image/game/skill_police.svg'} />
        )}
        {checkVote(props.streamManager) && props.myRole === 'DOCTOR' && (
          <SkillImage src={process.env.PUBLIC_URL + '/image/game/skill_doctor.svg'} />
        )}
        {checkVote(props.streamManager) && props.myRole === 'REPORTER' && (
          <SkillImage src={process.env.PUBLIC_URL + '/image/game/skill_reporter.svg'} />
        )}
        {checkVote(props.streamManager) && props.myRole === 'PRIEST' && (
          <SkillImage src={process.env.PUBLIC_URL + '/image/game/skill_priest.svg'} />
        )}
      </>
    );
  }
}

export default VoteAndSkill;
