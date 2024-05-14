/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  // str=str.split(" ").join("");
  // even better approach , use this method -> replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") instead of using seperate split and join

  str=str.replace(/[.,\/#!$%\^&\*;:{2,}=\-_`~()?]/g,"");
  str=str.split(" ").join("");

  var len = str.length;
  if(len%2===0){
      for(let i=0 , j=len-1 ; i<len/2 && j>=len/2 ; i++ , j--){
          if(str[i]===str[j]) continue;
          else return false;
      }  
      return true;
  }  
  else if(len%2!=0){
      for(let i=0 , j=len-1 ; i<len/2 && j>len/2 ; i++ , j--){
          if(str[i]===str[j]) continue;
          else return false;
      }  
      return true;
  }
}
module.exports = isPalindrome;
