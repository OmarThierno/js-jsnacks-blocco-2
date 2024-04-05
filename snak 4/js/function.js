/**
 * Description: prendiamo un array troviamo l'indice che ci forniscono
 * @param {array} array
 * @param {number} array
 * @return {}
 */
function findIndexArray(array, num){
  let elem = '';
  for (let i = 0; i < array.length; i++) {
    if (i === num) {
      elem = array[i]
    }
  }

  if (elem === '') {
    return elem = array[array.length -1];
  } else {
    return elem
  }
}


