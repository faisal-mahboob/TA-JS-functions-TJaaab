/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello(name){
  alert(`Hello ${name}`)
}

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName, lastName){
  fullName=(`${firstName} ${lastName}`)
  return fullName
}





/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum,secondNum){

  
  if ((Number.isInteger(firstNum))==0){
    alert("First Number is not a number. Enter valid input.")
    return
  }
  if ((Number.isInteger(secondNum))==0){
    alert("Second Number is not a number.Enter valid input.")
    return
  }
  let sum=firstNum+secondNum
  console.log(sum)
  return sum

}


/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(numA,numB,operation){
  if ((Number.isInteger(numA))==0){
    alert("Enter Valid Input")
    return
  }
  if ((Number.isInteger(numB))==0){
    alert("Enter Valid Input")
    return
  }
  if (operation=='add'){
    sum=numA+numB
    console.log(sum)
    return sum
  }
  if (operation=='sub'){
    sum=numA-numB
    console.log(sum)
    return sum
  }
  if (operation=='mul'){
    sum=numA*numB
    console.log(sum)
    return sum
  }
  if (operation=='div'){
    sum=numA/numB
    console.log(sum)
    return sum
  }
}


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/


function isLeapYear(num){
  if ((num%400==0)||((num%4==0)&&(num%100!=0)){
    console.log('Leap Year');
    return true
  }
  else{
    console.log('Not a Leap Year');
    return False
  }
}


/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/


function getFactorial(num){
  let a=num
  let fact=num
  while (a>1){
    a=a-1
    fact=fact*a
  }
 return fact
}
