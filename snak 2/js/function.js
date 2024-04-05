function wordLenght(word){
  return word.length
}

function isWordLenghtSame(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}


console.log(isWordLenghtSame('ciao', 'ciao'));

console.log(wordLenght('coao'));