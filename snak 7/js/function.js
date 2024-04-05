/**
 * Description: prende un array e crea un nuovo array senza il primo elemento (index 0)
 * @param {array} array
 * @returns {array}
 */
function removeFirtElemArray(array) {
  const arrayWithoutFirtElem = [];
  for (let i = 1; i < array.length; i++) {
    arrayWithoutFirtElem.push(array[i]);
  }
  return arrayWithoutFirtElem;
}