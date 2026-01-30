/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    let strCase = str.toLowerCase();
    let len = strCase.length;
    for(let i = 0; i < len/2; i++){
      if(strCase[i] != strCase[len-i]){
        console.log(strCase[i]);
        console.log(strCase[len-i-1]);
        return false;
      }
       console.log(strCase[i]);
       console.log(strCase[len-i-1]);
    }
    return true;
}
let bool = isPalindrome('mamdam');
console.log(bool);
module.exports = isPalindrome;