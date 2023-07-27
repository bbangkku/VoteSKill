import { atom } from 'recoil';

export const waitingUser = atom({
  key: 'waitingUser',
  default: ['병국', '석준', '정인', '채영', '종명', '종호'],
});
