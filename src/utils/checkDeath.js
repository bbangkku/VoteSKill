export const checkDeath = (deathArray, nickname) => {
  const isDeath = deathArray.find((playerNickname) => playerNickname === nickname);
  console.log('isDeath', isDeath);
  return isDeath === undefined ? false : true;
};
