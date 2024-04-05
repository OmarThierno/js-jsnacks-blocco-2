function getRandomNum (min, max) {
  return Math.floor((Math.random() * (max - min) +1) + max);
}

console.log(getRandomNum(1,5));