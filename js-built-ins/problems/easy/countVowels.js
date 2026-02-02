/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == 'a'||str[i] == 'A'||str[i] == 'e'||str[i] == 'E'||str[i] == 'i'||str[i] == 'I'||str[i] == 'o'||str[i] == 'O'||str[i] == 'u'||str[i] == 'U'){
      count ++;
    }
  }
   return count;

}
// let count1 =countVowels("Ripu1098daman");
// console.log(count1);
// let count2 =countVowels("Ripu1098daman Singh");
// console.log(count2);
module.exports = { countVowels };



