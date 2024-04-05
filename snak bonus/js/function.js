function insertHeadArray(array, newElem) {
  const newArray = [newElem];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray;
}