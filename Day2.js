// Print numbers from 10 to 1 using a loop.
for(let i=10 ; i>=1 ; i--){
    console.log(i)

}

// Check if a number is positive, negative, or zero.

let num = -9;

if (num === 0){
    console.log("Zero")
}else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Positive")
}

// Print even numbers from 1 to 20.

for(let i=1 ; i<=20 ; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// alter Print even numbers from 1 to 20.

for(let i=2 ; i<=20 ; i+=2){
    console.log(i)
}

// Print numbers from 1 to 30 - If divisible by 3 → print "Fizz" , If divisible by 5 → print "Buzz" , 
// If divisible by both → print "FizzBuzz" ,Otherwise print the number

for(let i=1 ; i<=30 ;i++){
    if (i % 3 ===0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 ===0){
        console.log("Fizz");
    }else if(i % 5 ===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}


// Arrays

// 1️⃣ Print all names using a loop
// 2️⃣ Add one more student
// 3️⃣ Remove last student
// 4️⃣ Check if "Sabana" exists

let students = ["Ana", "John", "Sabana", "Mike"];


for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
students.push("Sabin");
console.log(students);

students.pop();
console.log(students);

console.log(students.includes("Sabana"));

 // For each loop

 students.forEach(j => {
    console.log("Students are: " + j);
 })




