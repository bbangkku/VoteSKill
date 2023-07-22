import axiosInstance from 'apis';

const userAPI = {
  signup: (username) => axiosInstance.post('/users', username),

  login: () => axiosInstance.get('/login'),

  logout: () => axiosInstance.post('/out'),

  kakaoLogin: (code) =>
    axiosInstance.get('/oauth/kakao', {
      params: {
        code: code,
      },
    }),

  checkId: (username) =>
    axiosInstance.get('/users/check', {
      params: {
        username,
      },
    }),

  getUserInfo: (userId) => axiosInstance.get(`/users/${userId}`),

  editUserInfo: (userId) => axiosInstance.put(`/users/${userId}`),
};

export default userAPI;
