import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { layoutState } from 'recoil/atoms/layoutState';

const useLayoutChange = () => {
  const [layout, setLayout] = useRecoilState(layoutState);

  const setDay = useCallback(() => setLayout({ ...layout, Day: true }), [setLayout]);
  const setNight = useCallback(() => setLayout({ ...layout, Day: false }), [setLayout]);
  const setMafia = useCallback(() => setLayout({ ...layout, Mafia: true }), [setLayout]);
  const setCitizen = useCallback(() => setLayout({ ...layout, Mafia: false }), [setLayout]);

  return { layout, setDay, setNight, setMafia, setCitizen };
};

export default useLayoutChange;
