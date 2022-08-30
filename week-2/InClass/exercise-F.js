const name = "Antonio"
const type = "admin"

function checkUser(nameUser,typeUser){
    if ((nameUser.charAt(0) == nameUser.charAt(0).toUpperCase()) && (nameUser.length>=5 && nameUser.length<=10)) {
      if (typeUser == "admin" || typeUser == "manager"){
        return "Username Valid"
      } else { return "Username Invalid"}
    } else { return "Username Invalid"}           
}

console.log(checkUser(name,type))