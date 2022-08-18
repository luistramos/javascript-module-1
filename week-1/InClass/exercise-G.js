const numberOfStudents = 15
const numberOfMentors = 8
const totalNumberOfStudentsAndMentors = numberOfStudents + numberOfMentors
const percStudents = Math.round(numberOfStudents/totalNumberOfStudentsAndMentors*100)
const percMentors = Math.round(numberOfMentors/totalNumberOfStudentsAndMentors*100)
console.log("Percentaje Students: " + percStudents+"%");
console.log("Percentaje Students: " + percMentors+"%");