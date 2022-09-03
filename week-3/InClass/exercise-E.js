let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let day = new Date()
function calculeAge(year) {
    return day.getFullYear() - year
}
let age = birthYear.map(calculeAge) 
console.log("Año de nacimiento de las personas:" + birthYear)
console.log("Edad de las personas, según su año de nacimiento: " + age)

