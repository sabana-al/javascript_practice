// Variables
let num = 20;
num = 23;
console.log(num)

const originalNum = 321;
// originalNum = 123;
console.log(originalNum); // Showing error because const will not be changed

// Datatypes
let name = "Sabana"
let age = 23
let isEmployee = true
let salary = null
let married 

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isEmployee));
console.log(typeof(salary));
console.log(typeof(married));


// Operatores
let a = 4;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a==b);
console.log(a!=b);
console.log(a%b);

// functions

function add(x , y){
	return ("X + Y = " + x+y);
}
console.log(add("AL","SABANA"));


function greet(name){
	console.log("Welcome "+name)
}
greet("Sabana")

const multiply = (c,d) => c*d;
console.log(multiply(5,4));

// Example 1
const square = (e) => e*e;

console.log(square(5));

// Example 2

const message = (firstname , currentage) =>{
	return (`Hi, I am ${firstname} and I am ${currentage} years old`)
}
console.log(message("Alsa" , 23));

// Example 3 

function addOrEven(givennumber){
	if (givennumber % 2 === 0){
		return ("Given Number is Even")
	}else{
		return ("Given Number is Odd")
	}
}
console.log(addOrEven(3));

// Terinary Operator

const checknumber = inputnum =>
	 inputnum % 2 === 0 ? "Even" : "Odd"

console.log(checknumber(4))