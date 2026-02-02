/*
Write a function that calculates the time (in seconds) : it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    sum = 0;
    const startTime = new Date().getSeconds();
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    const endTime = new Date().getSeconds();   
    return endTime - startTime ;
}

let totalTime100 = calculateTime(100);
console.log(totalTime100);
let totalTime100000 = calculateTime(100000);
console.log(totalTime100000);
let totalTime1000000000 = calculateTime(1000000000);
console.log(totalTime1000000000);