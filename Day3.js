// Use map() to:
// 👉 Add 10% tax to each price
// 👉 Store in new array
// 👉 Print result

let prices = [100, 200, 300];
let increasedPrice = prices.map(i => i+i*0.10);
console.log(increasedPrice);

// Double the Numbers

let doubleprice = prices.map(price => price+price);
console.log(doubleprice);

// Extract Names From Objects

let user = [
  { name: "Lily", age: 20 },
  { name: "Tom", age: 25 },
  { name: "Sara", age: 22 }
];
let extractnames = user.map(user => user.name);
console.log(extractnames);

// Convert to Uppercase
 let students = ["ana", "john", "mike"];
let studentsupper = students.map(stud => stud.toUpperCase());
console.log("Uppercase Conversion "+studentsupper);

let firstLetterUpper = students.map(stud => stud[0].toUpperCase()+stud.slice(1))
console.log("First Letter has been changed " + firstLetterUpper);
// Filter

// Get Only Odd Numbers using filter()

let numbers = [3, 8, 15, 20, 7, 12];
let oddnumbers = numbers.filter(num => num %2!==0);
console.log(oddnumbers)


// Keep Only Even Numbers

let nums = [4, 7, 10, 13, 16, 19];
let evenNumbers = nums.filter(num => num%2===0);
console.log(evenNumbers);

// Numbers Greater Than 100

let pricess = [50, 120, 75, 200, 30, 150];
let greater100 = pricess.filter(num => num>100);
console.log(greater100);

// Long Names Only , Keep names with length greater than 5.

let names = ["Tom", "Alexander", "Eva", "Christopher", "Sam"];
let longname = names.filter(name => name.length>5)
console.log(longname);

//Active Users , Keep only users where active is true.

let users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];
let activeuser = users.filter(user => user.active === true);
console.log(activeuser);


//Exercise 1 — Adults with Capitalized Names
// Keep users age ≥ 18 , Return only their names , First letter uppercase

let childrens = [
  { name: "ana", age: 17 },
  { name: "john", age: 22 },
  { name: "sara", age: 15 },
  { name: "mike", age: 30 }
];

let majorUsers = childrens.filter(child => child.age>=18).map(user => user.name[0].toUpperCase() + user.name.slice(1))
console.log(majorUsers);


//Discounted Expensive Products
// Keep products with price > 100 , Apply 20% discount , Return the new discounted prices 

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Phone", price: 800 },
  { name: "Cable", price: 10 }
];

let lessprice = products.filter(product => product.price>100).map(discount => discount.price*0.8);

console.log(lessprice)

//Passed Students (Clean Names)
// Keep students score ≥ 50 , Convert names to proper format: First letter uppercase Rest lowercase

let sch_students = [
  { name: "EMMA", score: 85 },
  { name: "liam", score: 45 },
  { name: "Olivia", score: 90 },
  { name: "noah", score: 30 }
];

let passedstudents = sch_students.filter(std => std.score>=50).map(std_name=>std_name.name[0].toUpperCase() + std_name.name.slice(1).toLowerCase());
console.log(passedstudents);