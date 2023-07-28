import { atom, selector } from 'recoil';

export const checkLevelAll = atom({
  key: 'levelAll',
  default: ['게임중', '초보', '중수', '고수'],
});

export const personCountAll = atom({
  key: 'personCountAll',
  default: ['1', '2', '3', '4', '5', '1', '3', '6', '1', '1'],
});

export const passwordRoomAll = atom({
  key: 'passwordRoomAll',
  default: [true, false, true, false, true, true, false, false],
});

export const roomLevelAll = atom({
  key: 'roomLevelAll',
  default: [
    ['초보'],
    ['중수'],
    ['고수'],
    ['초보', '중수'],
    ['초보', '중수', '고수'],
    ['초보', '고수'],
    ['중수', '고수'],
    ['중수'],
    ['고수'],
    ['초보'],
  ],
});
export const roomAll = atom({
  key: 'roomAll',
  default: ['마피아 ', '봇츠킬 ', '이겨내 ', '행복하게 ', '즐겜 ', '정인 ', '예에 ', '스크롤되나? ', '된다 ', '진짜'],
});
