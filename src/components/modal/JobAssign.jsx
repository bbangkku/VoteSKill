import { keyframes } from '@emotion/react';
import * as S from 'components/modal/JobAssign.Style';
import useLayoutChange from 'hooks/useLayoutChange';
import { useEffect, useState } from 'react';

function JobAssign() {
  const { layout } = useLayoutChange();
  const job = 'spy';

  const jobimage = (job) => {
    const src = process.env.PUBLIC_URL + `/image/game/job/${job}.jpg`;
    return src;
  };

  const jobText = (job) => {
    if (job == 'mafia') {
      return '마피아';
    } else if (job == 'politician') {
      return '정치인';
    } else if (job == 'spy') {
      return '스파이';
    }
  };

  const [showJobModal, setShowJobModal] = useState(true);

  // 2
  useEffect(() => {
    setShowJobModal(!showJobModal);
    setTimeout(() => {
      setShowJobModal(!showJobModal);
    }, 5000);
  }, []);

  // 1, 3
  return (
    <div>
      {showJobModal ? (
        <S.JobAssignModalBody layout={layout} showJobModal={showJobModal}>
          <S.JobImage src={jobimage(job)}></S.JobImage>
          <S.JobAssignText>당신은 {jobText(job)} 입니다.</S.JobAssignText>
        </S.JobAssignModalBody>
      ) : null}
    </div>
  );
}

export default JobAssign;
