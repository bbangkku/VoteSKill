import { atom, selector } from 'recoil';
import axios from 'axios';

// roomList 받아오기
export const getRoomList = async () => {
  // try {
  //   const response = await axios.get('http://localhost:8000/rooms');
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   return [];
  // }
};

// 체크용
export const responseData = atom({
  key: 'responseData',
  default: [
    {
      name: '마피아',
      password: 'qlqjs',
      host: '병국',
      admitNumber: 6,
      people: [],
    },
    {
      name: '봇츠킬',
      password: '',
      host: '병국',
      admitNumber: 6,
      people: [],
    },
  ],
});
