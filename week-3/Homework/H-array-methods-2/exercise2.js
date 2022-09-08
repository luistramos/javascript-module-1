/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

//function capitalise(str) {}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const name = "daniel";

function capitalise(nomb){
    let divNomb = nomb.split("");
    divNomb[0] = divNomb[0].toUpperCase()
    let verNomb = divNomb.join("")
    return verNomb
}

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
