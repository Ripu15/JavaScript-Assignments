/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function reverseString(str) {
  if(str == ""){
    return "";
  }
  //reverse(): This method reverses the order of elements in the array, swapping the first element with the last, and so on.
  let revStr = str.split('').reverse().join('');
  return revStr;
}

// let revStr1 =  reverseString("Ripudaman");
// let revStr2 = reverseString("");
// let revStr3 = reverseString("Ripudaman Singh");
// console.log(revStr1);
// console.log(revStr2);
// console.log(revStr3);
module.exports = reverseString;
