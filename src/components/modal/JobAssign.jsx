import { keyframes } from '@emotion/react';
import * as S from 'components/modal/JobAssign.Style';
import useLayoutChange from 'hooks/useLayoutChange';
import useModal from 'hooks/useModal';
import { useEffect, useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
import * as M from 'components/modal/Modal.style';

function JobAssign() {
  const { layout } = useLayoutChange();
  const job = 'mafia';

  const { modalToggleState, openModal, closeModal } = useModal('JobAssign');

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

  const [showJobModal, setShowJobModal] = useState();

  //setShowJobModal(true);

  const handleJobModal = () => {
    setShowJobModal(!showJobModal);
  };
  // 2
  useEffect(() => {
    //console.log(modalToggleState);
    openModal();
    handleJobModal();
    setTimeout(() => {
      handleJobModal();
    }, 5000);
    // false로
    //setShowJobModal();
  }, []);

  // 1, 3
  return (
    <div>
      {modalToggleState && (
        <S.JobAssignModalBody layout={layout} showJobModal={showJobModal}>
          <S.JobImage src={jobimage(job)}></S.JobImage>
          <S.JobAssignText>당신은 {jobText(job)} 입니다.</S.JobAssignText>
          <M.ModalExitButton>
            <FiXCircle size={30} color="#000000" onClick={closeModal} cursor={'pointer'} />
          </M.ModalExitButton>
        </S.JobAssignModalBody>
      )}
    </div>
  );
}

export default JobAssign;
