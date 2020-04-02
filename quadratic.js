//Get input
let a, b, c;
// let result;

//Forn validation equation function
function validate(){
  //Get the input
  a = document.forms["input_form"]["term-a"].value;
  b = document.forms["input_form"]["term-b"].value;
  c = document.forms["input_form"]["term-c"].value;

  //Input validation
  if(a == 0){
    notice = "<em>a<em/>Enter a non-zero integer!"
    
  }

  result = document.getElementById("result");
  
}