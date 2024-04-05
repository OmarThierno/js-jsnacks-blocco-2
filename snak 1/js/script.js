const userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));

for (let i = 0; i < userNum; i++) {
  const newArray = generateArray();
  console.log(newArray);

  printArray(newArray);
}