/*
  Write two functions to generate the Fibonacci sequence:

  1. `fibonacci` (Iterative Version):
     - Takes an integer `n` as input and returns an array containing the first `n` numbers in the Fibonacci sequence.
     - The Fibonacci sequence is calculated iteratively.
  
  2. `fibonacciRecursive` (Recursive Version):
     - Takes an integer `n` as input and returns the `n`-th number in the Fibonacci sequence using recursion.
  
  What is the Fibonacci sequence?
  - The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

  Example:
  - Input: 10
  - Output (Iterative): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  - Output (Recursive): 34
  
  - Input: 5
  - Output (Iterative): [0, 1, 1, 2, 3]
  - Output (Recursive): 3

  - Input: 1
  - Output (Iterative): [0]
  - Output (Recursive): 0
  
  - Input: 0
  - Output (Iterative): []
  - Output (Recursive): 0

  Note:
  - The iterative function should return the first `n` numbers of the sequence.
  - The recursive function should return the `n`-th Fibonacci number (0-based index).

  Once you've implemented the logic, test your code by running
  - `npm run test-fibonacci`
*/

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Iterative Fibonacci function
function fibonacci(n) {
  let fibbo = [];
  let firstElement = 0, secondElement = 1;
  fibbo.push(firstElement);
  fibbo.push(secondElement);
 
  for(let i = 2; i < n; i++){
    let next = fibbo[i-2] + fibbo[i-1];
    fibbo.push(next);
  }
  return fibbo;

}



// Recursive Fibonacci function
function fibonacciRecursive(n) {
  let fibbo = [];
  let firstElement = 0 ,secondElement = 1;
  fibbo.push(firstElement);
  fibbo.push(secondElement);
  if(n==1){
    return 1;
  }
  if(n==0){
    return 0;
  }
  for(let i = 2; i <= n ; i++ ){
    let next = fibbo[i-2] + fibbo[i-1];
    fibbo.push(next);
    if(i == n){
      return fibbo[i];
    }
  }


}


// let fibbo = fibonacci(10);
// console.log(fibbo);
// let fibboElement = fibonacciRecursive(10);
// console.log(fibboElement);

module.exports = { fibonacci, fibonacciRecursive };


