import Modal from 'components/modal/Modal';
import * as S from 'components/jobintroduce/JobIntroduce.Style';
import React, { useState, useEffect } from 'react';
import { Background } from 'components/layout/Layout.Style';
import { keyframes } from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image from './assets/images';

function JobAssign(props) {
  console.log(props.data);

  const modalImg = [
    '/image/jobintroduce/mafia.png',
    '/image/jobintroduce/spy.png',
    '/image/jobintroduce/policer.png',
    '/image/jobintroduce/doctor.png',
    '/image/jobintroduce/soldier.png',
    '/image/jobintroduce/politician.png',
    '/image/jobintroduce/developer.png',
    '/image/jobintroduce/reporter.png',
    '/image/jobintroduce/priest.png',
    '/image/jobintroduce/gangster.png',
  ];
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

  return (
    <div>
      <S.JobIntroduceBackground>
        <S.Job>
          {modalJob.map((job, index) => (
            <S.ModalContent key={index} active={index === currentModalIndex}>
              <S.JobImg src={process.env.PUBLIC_URL + modalImg[currentModalIndex]} alt="mafia" />
              <S.JobIntroduceDiv>
                <S.JobName>
                  당신의 직업은
                  <br /> {modalJob[currentModalIndex]}입니다.
                </S.JobName>
                <S.JobDescription>{modalDescription[currentModalIndex]}</S.JobDescription>
              </S.JobIntroduceDiv>
            </S.ModalContent>
          ))}
        </S.Job>
      </S.JobIntroduceBackground>
    </div>
  );
}

export default JobAssign;
