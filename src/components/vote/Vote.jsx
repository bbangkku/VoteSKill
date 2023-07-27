import useModal from 'hooks/useModal';
import * as S from 'components/vote/Vote.Style';
import { FiXCircle } from 'react-icons/fi';

function Vote() {
  return <S.ModalBody></S.ModalBody>;
}
function Modal({ children }) {
  const { modalToggleState, closeModal } = useModal();

  return (
    <>
      {modalToggleState && (
        <S.ModalBackground>
          <S.ModalBody>
            <S.ModalExitButton>
              <FiXCircle size={30} color="#970000" onClick={closeModal} cursor={'pointer'} />
            </S.ModalExitButton>
            {children}
          </S.ModalBody>
        </S.ModalBackground>
      )}
    </>
  );
}

export default Modal;
