const str = "Anna"

//function to check if palindrome is in a string

function isPalindrome (inStr){
  inStr = inStr.toLowerCase();
  for(let i = 0; i < inStr.length; i++){
    if(inStr[i] !== inStr[inStr.length -1 - i ]){
      // return inStr === inStr.reverse(); but reverse is not a string method, so:

      //return inStr === inStr.split("").reverse().join(); 
      //better still:
      return (false);
    }
  }
  return ("palindrome found")
}

console.log(isPalindrome(str))

const str2 = "race car?"

const aPalindrome = (inStr) => {
  inStr = inStr.replace(/\W/g, "");//RegEx to remove non-ABCs
  inStr = inStr.toLowerCase()
  for(let i = 0; i < inStr.length; i++){
    if(inStr[i] !== inStr[inStr.length - 1 - i]){
      return false
    }
  }
  return true
}

console.log(aPalindrome(str2))

//Truncation method. Asian boy's method
const myString = "Anna"
const myString2 = "orace car oo"
function hisPalindrome (str){
  str = str.toString();
  str = str.toLowerCase();
  str = str.replace(/\W/g, "");
  if(str.length === 0) {return true}
  if(str[0] !== str[str.length-1]){return false;}
  return hisPalindrome(str.slice(1,str.length-1));
}

console.log(`Hello, this is ${hisPalindrome(myString)}`)



