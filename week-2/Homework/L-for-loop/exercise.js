/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;
let numbers = ""

function sumTillNum(num) {
	for  (let i = 0; i<=num; i++) {
		if (i < 10) {
			numbers = numbers + i + " + ";
		}
		else {
			numbers = numbers + i;
		}		
	}
	//your code here
	return numbers
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
