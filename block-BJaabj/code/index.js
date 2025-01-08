/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/

function sayHello(){
  alert("Hello World")
}

/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/

function fullName(){
  let firstName=prompt('Enter your First Name:');
  let lastName=prompt("Enter your Last Name:");
  fullName=firstName+' '+lastName;
  alert(fullName);
}



/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/


function addTwoNumbers(){
    let firstNum=Number(prompt("Enter the First Number:"))
    let secondNum=Number(prompt("Enter the Second: "))
    let sum=firstNum+secondNum
    alert(sum)
}



/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/


function getTable(){
  let num = Number(prompt('Enter a number: '))
  let num1=num*1
  let num2=num*2
  let num3=num*3
  let num4=num*4
  let num5=num*5
  let num6=num*6
  let num7=num*7
  let num8=num*8
  let num9=num*9
  let num10=num*10
  console.log(`${num}*1=${num1}`)
  console.log(`${num}*2=${num2}`)
  console.log(`${num}*3=${num3}`)
  console.log(`${num}*4=${num4}`)
  console.log(`${num}*5=${num5}`)
  console.log(`${num}*6=${num6}`)
  console.log(`${num}*7=${num7}`)
  console.log(`${num}*8=${num8}`)
  console.log(`${num}*9=${num9}`)
  console.log(`${num}*10=${num10}`)


}


/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/


function isLeapYear(){
  let year=Number(prompt('Enter a year: '))
  if (year%400==0|| (year%4==0)&&(year%100!=0)){
    alert(`${year} is a leap year`)
  }
  else {
    alert(`${year} is not a leap year`)
  }
}



/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/

function getFactorial(){
  let number=Number(prompt("Enter a number: "))
  let n=number
  let a=number
  while (n>1){
    n=n-1
    a=a*(n)
  }
  console.log(a)
}
