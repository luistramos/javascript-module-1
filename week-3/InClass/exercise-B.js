let studentsA = ["Gabriel","Natalia","Graciela","Linda","Lina","Laura","Andrea","Fernanda",
    "Luis", "Litzy","Wiston","Oswaldo","Karelys"];
let studentsB = ["Xiomara", "Elimar","Miguel","Vannesa","Matias", "Alejandro" ];
console.log("Estudiantes Grupo A: " + studentsA);
console.log("EStudiantes Grupo B: " + studentsB);
studentsTotal = studentsA.concat(studentsB);
console.log("Lista desordenada: " + studentsTotal); // Lista desordenada
console.log("Lista ordenada: " + studentsTotal.sort()); // Lista ordenada

function IsAStudent(nameStudent) { //Devuelve si existe un estudiante en clase
    if (studentsTotal.includes(nameStudent)) {
        return nameStudent + " is at the class with <people in the array>";
    } else {
        return nameStudent + " is not at the class with <people in the array>";
    }
}
console.log(IsAStudent("Eduardo"))