let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let day = new Date()

function calculeAge(year) {
    let age = day.getFullYear() - year
    let driveYear = year+17
    let passYear = 0
   if (age<17){
        passYear = 17 - age
    }
    let message = "Born in: " + year+";"+ " Can drive o Born in: "+ driveYear +";"+ " Can drive in: "+ passYear + " years.";
    return console.log(message)
}
birthYear.map(calculeAge);