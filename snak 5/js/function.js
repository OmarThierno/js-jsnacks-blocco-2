/**
 * Description: prende un Array e lo tranforma in una stinga, separanto gli elementi dalla virgola
 * @param {*} array
 * @returns {string}
 */
function separateArrayElem(array) {
  let str = ''
  for (let i = 0; i < array.length -1; i++) {
    str += array[i] + ',';
    // if(i < array.length - 1) {
    //   str += array[i] + ',';
    // } else {
    //   str += array[i]
    // }
  }
  return str + array[array.length - 1];
}
