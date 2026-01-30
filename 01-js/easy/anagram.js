/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {

  //checking length of both strings
  if (str1.length !== str2.length) {
      return false;
  }
//steps to sort string :
//toLowerCase(): converts string to lowercase
//split(''): convert string to array of characters
//sort(): sort the array of chars in alphabetical order
//join(''): converting arr of chars into string
  function sortString(str) {
      return str.toLowerCase().split('').sort().join('');
  }


  return sortString(str1) === sortString(str2);
}

// let ana =isAnagram('noway','WayNo');
// console.log(ana);
module.exports = isAnagram;