//five ways to reverse string in js Adam coder

const a = "This is the working string";

//Split end join each individual character and reverse
function reverseStr(str){
  console.log(str.split("").reverse().join(""))
}
reverseStr(a)

//Using spread operator

const reverseStr2 = (str) => {
  // str = str.toString(); //
  // str = str.toLowerCase();
  // str = str.replace(/\W/g, "");
  console.log([...str].reverse().join(""));
}
reverseStr2("Amayo");


function reverseStr3(str){
  let invertedStr = "";
  for(let i = str.length -1; i >= 0; i--){
    invertedStr = invertedStr += str[i];
  }
  console.log(invertedStr)
}
reverseStr3("Abba");

//Es6 syntax
const reverseStr4 = (str) => {
  let inverseStr = "";
  for(char of str){
    //console.log(inverseStr += char)//fun
    inverseStr = char + inverseStr
  }
  console.log(inverseStr)
}
reverseStr4("areera");

//Using built-in array method
const reverseStr5 = (str) => {
  console.log([...str].reduce((acc, char)=> char + acc, "")); 
}

reverseStr5("Oyama")