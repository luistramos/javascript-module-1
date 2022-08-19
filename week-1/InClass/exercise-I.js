const name1 = "Luis"
const age1 = 48
const year = 2022

/*función dias de nacimiento*/
function getAgeInDays(age) {
  return age * 365;
}
function createGreeting(name, age) {
  const ageInDays = getAgeInDays(age1);
  const message = 
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}
const message1 = createGreeting(name1,age1)
console.log(message1)

/*función año de nacimiento*/
function yearOfBirth(age) {
  return year - age;
}
function createGreetingYear(name, age) {
  const birthYear = yearOfBirth(age1);
  const message = 
    "My Name is " + name + " and I was born in " + birthYear;
  return message;
}
const message2 = createGreetingYear(name1,age1)
console.log(message2)