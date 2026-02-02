/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //convert str to lower case and remove anything like , ! @ " " etc
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    let len = cleanStr.length;

    for(let i = 0; i < len/2; i++){   
      if(cleanStr[i] != cleanStr[len-i-1]){
        return false;
      }     
    }
    return true;
}
// let bool = isPalindrome('madam');
// console.log(bool);
module.exports = isPalindrome;