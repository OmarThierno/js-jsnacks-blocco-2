function getRandomNum (min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}


function generateArray() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    let numInArray = getRandomNum(1, 100)
    newArray.push(numInArray);

  }
  return newArray;
  
}

function printArray(array) {
  const htmlElem = document.getElementById('list');

  htmlElem.innerHTML += `<li>${array}</li>`;
}