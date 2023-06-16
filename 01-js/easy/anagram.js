/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length) return false;
  else {
    var dict1={};
    var dict2={};
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    for(let i=0 ; i<str1.length ; i++){
      if(str1[i] in dict1){
        dict1[str1[i]]++;
      }
      else dict1[str1[i]]=1;
    }

    for(let i=0 ; i<str2.length ; i++){
      if(str2[i] in dict2){
        dict2[str2[i]]++;
      }
      else dict2[str2[i]]=1;
    }
    var ret=-1;
    for ( let keyss in dict1){
      if(dict1[keyss]=== dict2[keyss]){
        continue;
      }
      else ret=1;
    }
    if(ret==1) return false ; 
    else return true;
  }
}

module.exports = isAnagram;
