// Update the following function to take an argument and output 'Even' if the argument is an even number or
// 'Odd' if the number is an odd number.

function oddOrEven(number){
  if(number % 2 === 1) {
    return 'odd'
  } else if (number % 2 === 0) {
    return 'even'
  }
}

  console.log(oddOrEven(11))


oddOrEven(4)
oddOrEven(11)
oddOrEven(75)
