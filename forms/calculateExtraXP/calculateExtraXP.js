/*
function randomMultiply(num4,num5) {
  let answer2 = num4 * num5
  return answer2
  }
  

function calcAvgSquare(num1,num2,num3) {
  let answer =  ((num1 + num2 + num3)/3) * num1 * num1
  return answer
  }
  let choice = prompt("Do you want to do random multiplication or an average calculation?").toLowerCase()
  
  if (choice == "average calculation") {
  let number1 = Number(prompt("Enter the first number: "))
  let number2 = Number(prompt("Enter the second number: "))
  let number3 = Number(prompt("Enter the third number: "))
  
  let finalValue = calcAvgSquare(number1,number2,number3)
  
  alert(`The answer is ${finalValue}`)
  }
  
  else if (choice == "random multiplication") {
  let number4 = Number(prompt("Enter the number that will be multiplied: "))
  let number5 = Math.floor(Math.random() * 10)
  let finalValue2 = randomMultiply(number4,number5)
  
  alert(`The result of multiplying the random ${number5} with ${number4} is ${finalValue2}`)
  
  }
  */