import Modal from 'components/modal/Modal';
import * as S from 'components/voteresult/VoteResult.Style';
import useModal from 'hooks/useModal';
import { FiXCircle } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import { Background } from 'components/layout/Layout.Style';
import { keyframes } from 'styled-components';
import * as M from 'components/modal/Modal.style';

function VoteResult(props) {
  const { modalToggleState, openModal, closeModal } = useModal('VoteResult');
  const checkJob = [
    'MAFIA',
    'SPY',
    'POLICER',
    'DOCTOR',
    'SOLDIER',
    'POLITICIAN',
    'DEVELOPER',
    'REPORTER',
    'PRIEST',
    'GANGSTER',
  ];
  const modalJob = ['마피아', '스파이', '경찰', '의사', '군인', '정치인', '개발자', '기자', '성직자', '갱스터'];
  const modalDescription = [
    '밤에 한 명을 죽일 수 있습니다.',
    '시민팀에 잠입하여 밤마다 플레이어 한명을 골라 그 직업을 알수있다. 그 대상이 마피아인경우 스파이는 마피아팀으로 복귀한다.',
    '밤이 될 경우 한 명을 조사하여 마피아 여부를 알수있다.',
    '마피아에게 살해 당할 것 같은 한명을 골라, 일치 할 시 대상을 살릴수있다.',
    '마피아의 타겟이 된경우 한차례 버틸수있다. 단, 이후 직업이 모두 공개된다.',
    '투표권이 2개. 투표로 처형되지않는다.',
    '시스템에 오류를 일으킨다. 밤에 화상과 음성기능을 사용할 수 있다.',
    '모든사람한테 찍은사람 직업을 공지처럼 알려줌. 게임 중 1번만 발동할 수 있으며, 두번째 밤부터 사용가능하다.',
    '밤에 죽은 플레이어 한명을 부활 시킨다. (1회)',
    '밤에 지목된 플레이어는 투표에 참여할수없으며, 마피아일 경우 사람을 죽일수없다.',
  ];

  const currentModalIndex = checkJob.indexOf(props.data);

  // 2
  useEffect(() => {
    //console.log(modalToggleState);
    openModal();

    // false로
    //setShowJobModal();
  }, []);

  return (
    <div>
      {modalToggleState && (
        <S.JobAssignModalBody>
          <S.JobImage src={process.env.PUBLIC_URL + '/image/voteImage.png'} />
          <div>투표결과</div>

          {modalJob.map((job, index) => (
            <S.ModalContent key={index} active={index === currentModalIndex}>
              {/* <S.JobImage src={process.env.PUBLIC_URL} /> */}
              <S.JobIntroduceDiv>
                <S.JobDescription>{modalDescription[currentModalIndex]}</S.JobDescription>
              </S.JobIntroduceDiv>
            </S.ModalContent>
          ))}
          <M.ModalExitButton>
            <FiXCircle size={30} color="#000000" onClick={closeModal} cursor={'pointer'} />
          </M.ModalExitButton>
        </S.JobAssignModalBody>
      )}
    </div>
  );
}

export default VoteResult;
