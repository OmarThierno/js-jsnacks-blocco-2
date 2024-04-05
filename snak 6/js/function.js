/**
 * Description: creare un nuovo array senza ultimo elemento
 * @param {array} array
 * @returns {array} array 
 */
function removeFromQueue(array) {
  const withoutLastElem = [];
  for (let i = 0; i < array.length -1; i++) {
    withoutLastElem.push(array[i])
  }

  return withoutLastElem
}



