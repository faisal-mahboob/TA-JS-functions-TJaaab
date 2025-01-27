// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(pup,human) {
  // Your code goes here
  pup=pup*7
  human=human/7
  return pup
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,number) {
  // Your code goes here
  let movies=age*number*48
  return movies
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  // Your code goes here
  let fah=temp+33.8
  let conv=`${fah}°F is ${temp}°C`
  return conv
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(temp) {
  // Your code goes here

 let cel=temp-33.8
  let conv=`${temp}°C is ${cel}°C`
  return conv

}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  // Your code goes here
  if (n<1){
    let a=alert('The number below 1 is not allowed')
    return a
  }
  let power=x**n
  return power

}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/


function sumOrProductOfN(n,str) {
  // Your code goes here
  let sum=n
  let product=n
  if (str=='sum'){
    while(n>0){
      n=n-1
      sum=sum+n
    }
    return sum
  }
  else if (str=='product'){
    while(n>1){
      n=n-1
      product=product*n
    }
    return product
  }
  else{
    alert("Not a valid input")
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  sum=n
 while n>0{
  n=n-1
  sum=sum+n
  return sum
 }

}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumofN(n){
sum=0
while n>0{
 if (n%5==0||n%7==0){
  sum=sum+n
 }
 n=n-1
}
return sum
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(n,m) {
  // Your code goes here
  if (n<m){
    return n
  }
  else{
    return m
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(wii) {
 let input1=typeof(wii)
return input1
}
