import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from 'recoil/atoms/modalState';

const useModal = () => {
  console.log('asdasdasds');
  const [modalToggleState, setModalToggleState] = useRecoilState(modalState);

  const openModal = useCallback(() => {
    setModalToggleState(true), [setModalToggleState];
    document.body.style.overflow = 'hidden';
  });

  const closeModal = useCallback(() => {
    setModalToggleState(false), [setModalToggleState];
    document.body.style.overflow = 'unset';
  });

  return { modalToggleState, openModal, closeModal };
};

export default useModal;
