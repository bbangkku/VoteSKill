import axiosInstance from 'apis';

const gameAPI = {
  setRoom: (roomData) => axiosInstance.post('/rooms', roomData),

  getRoomList: (title, grade, state) =>
    axiosInstance.get('/rooms', {
      params: {
        title,
        grade,
        state,
      },
    }),

  enterRoom: (roomId) => axiosInstance.post(`/rooms/${roomId}`),

  exitRoom: (roomId) => axiosInstance.delete(`/rooms/${roomId}`),

  dropUser: (roomId, userId) => axiosInstance.delete(`/rooms/${roomId}/${userId}`),

  startGame: (roomId) => axiosInstance.post(`/rooms/${roomId}/start`),

  voteGame: (roomId, userId) =>
    axiosInstance.post(`/rooms/${roomId}/vote`, {
      params: {
        target: userId,
      },
    }),

  useSkill: (roomId, userId) =>
    axiosInstance.post(`/rooms/${roomId}/skill`, {
      params: {
        target: userId,
      },
    }),
};
export default gameAPI;
