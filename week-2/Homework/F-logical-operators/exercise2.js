/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/
const valor = 0
function isNegative(valor) {
  if (valor<0){
    return true
    }
    else {
      return false
    }
  }

  function isBetween5and10(valor) {
  if (valor >= 5 && valor <= 10) {
    return true
    }
    else {
      return false
    }
  }
  let nombre = ""

function isShortName(nombre) {
  if (nombre == "Daniel") {
    return true
  }
    else {
      return false
    }
  }
function startsWithD(nombre) {
  if (nombre.charAt(0) == "D") {
    return true
  }
    else {
      return false
    } 
  }



  /* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'? true
*/
