import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { nightState } from 'recoil/atoms/nightState';

const useDayChange = () => {
  const [isNight, setIsNight] = useRecoilState(nightState);

  const setNight = useCallback(() => setIsNight(true), [setIsNight]);
  const setDay = useCallback(() => setIsNight(false), [setIsNight]);

  return { isNight, setNight, setDay };
};

export default useDayChange;
