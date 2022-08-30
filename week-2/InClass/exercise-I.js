let fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
console.log(fruits)
for (let i=0; i<=fruits.length-1; i++){
    if (fruits[i] == "apple"){
        fruits[i] = "raspberry"
    }    
    if (fruits[i] == "fig"){
       fruits[i] = "pineapple"
    }
}
console.log(fruits)