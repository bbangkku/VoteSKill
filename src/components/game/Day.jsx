import * as S from 'components/game/Day.Style';
import useModal from 'hooks/useModal';
import { FiXCircle } from 'react-icons/fi';

function Day() {
  return (
    <div>
      <S.ModalBody>
        <S.DayImage src={process.env.PUBLIC_URL + '/image/game/Day.png'}></S.DayImage>
        <S.DayText>첫번째 낮!</S.DayText>
      </S.ModalBody>
    </div>
  );
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

export default Day;
