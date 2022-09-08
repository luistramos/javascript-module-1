const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function busqnomb(valor){
  let revNomb = names.find(nomb => nomb == valor);
  let message=""
  if(revNomb){
    message = valor + ": Found me!";
  } else {message = valor + ": Haven´t found me :(";}
  return message;
}  

console.log(busqnomb("Irina"))
