let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let day = new Date()

function calculeAge(year) {
    let age = day.getFullYear() - year
    if (age>=17){
      return year
    }
}    
let driveYear = birthYear.filter(calculeAge);
console.log("These are the birth years of people who can drive: " + driveYear)
