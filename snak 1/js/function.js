function getRandomNum (min, max) {
  return Math.floor((Math.random() * (max - min) +1) + max);
}


function generateArray(num) {
  const totalArray = [];
  for (let i = 0; i < num; i++) {
    const nameArray = 'array' + i;
    console.log(i);
    totalArray.push(nameArray)

  }
  console.log(totalArray);
  return totalArray;
  
}

generateArray(6);