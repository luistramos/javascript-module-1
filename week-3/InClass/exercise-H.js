const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
function isName(name) {
  if (names.find(name)){
    let message = "Found me!"
  }  
  else { let message = "Haven´t found me :("} 
  return message 
}

console.log(names.find(isName("Daniel")))

/*const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
function isLongName(name) {
  return name.length > 6;
}
const longName = names.find(isLongName);

console.log(longName); // logs Mozafar*/