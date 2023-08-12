import { useCallback, useEffect, useState } from 'react';
import * as S from 'components/timer/Timer.style';
import { GiTimeBomb } from 'react-icons/gi';

function Timer({ initSecond, callbackFunction }) {
  const [count, setCount] = useState(initSecond);

  useEffect(() => {
    if (count === 0) {
      // callback props받고 0초됐을때 모달띄우기
      console.log('초다됨');
      console.log(callbackFunction, '콜백함수');
      if (callbackFunction) {
        console.log('콜백있다');
        callbackFunction();
        console.log('콜백끝났다');
        setCount(5);
      }
      // console.log('0초입니다');
      // callbackFunction();

      return;
    }
    const calculate = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(calculate);
  }, [count]);

  const convertTime = useCallback((seconds) => {
    const addZero = (num) => (num < 10 ? '0' : '') + num;

    if (seconds < 61) return '00:' + addZero(seconds);

    const mins = Math.floor(seconds / 60);
    const secs = seconds - mins * 60;
    return addZero(mins) + ':' + addZero(secs);
  }, []);

  return (
    <S.TimerWrapper>
      <S.IconBox $sec={count}>
        <GiTimeBomb size={'100%'} />
      </S.IconBox>
      <S.TimeSpan $sec={count}>{convertTime(count)}</S.TimeSpan>
    </S.TimerWrapper>
  );
}

export default Timer;
