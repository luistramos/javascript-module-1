/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;
let numbers = []

function sumTillNum(num){
	console.log(num)
	while (num >= 0) {
		/*return n-num;*/
		/*return num*/
		numbers.push(n-num)
		console.log(num)
		num --;
	}
	//your code here
}


console.log("Sum from 0 to " + n + " is: " + sumTillNum(n) + numbers);




