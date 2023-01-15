//Basic syntax, functions, info display into console, and Element ID 

console.log("Hello World");
console.log("This is my first time doing web dev");

window.alert("Roh roh"); //Pops alert window in brower

//This is how we write comments in Javascript
/* 
    Multi-line comment
*/

// Variable Declaration and Assignment
// ** We declare a var with these keywords : var, let, or const (const like in C++ / constant )
// ** This is because JavaScript is a DYNAMICALLY TYPED language which means that JS can
//    receive different data types over time -> Untyped langauges allow the storage of any value using the keyword
//    var or let , as seen in Python

//    Var -> variable that we can store a String, int, null, and has no Scope constraints 
//    Let -> another type of variable thats similar to var but has Scope constraints (Global vs Local)
//    Const -> another variable type assigned to data whose value cannot and will not change throughout the script

//    scope => part of the program where the variable may be directly accessible 
//    (Global variables can be accessed anywhere thru out the script whereas local variables can only be accessed 
//    inside a local function)

let age = "too old";
let ageAlt = 21;
const globalName = "top g6";

var a, b, c; //muiltple variable declarations
a = 1.4;
b = false;
c = "3";

console.log("Hi " + globalName);
console.log("you are" , age);
console.log("Which means that you are " + ageAlt);

console.log(a, b, c);

//If I want to access and modify the internal html code of a paragraph tag
document.getElementById("paragraph1").innerHTML = "Hi this is cool " + globalName;
// getElement() returns a reference to an HTML object and we can modify it

//Modifys in order of the paragraph tags declaration
document.getElementById("paragraph3").innerHTML = "Right?" ;
document.getElementById("paragraph2").innerHTML = "In order of declaration in HTML script? " + toString(!b);

//Functions in JavaScript -> whether we return a variable or NOT the syntax is the same :
//                               function funcName(parameters){ 
//                                  ...
//                                  return;
//                                  return undefined; //equiv as above
//                                  return var;
//                                  OR no return call (function returns undefined)
//                               }

// To RECAP : A Javascript function does not need to return anything, even for function foo(){ ... }
// but the JS engine always returns smth, even if we dont explicitly (it returns undefined)

function toString(boolean){ //returns String version of Booleans
    if(boolean == false) return "FALSE!";
    else return "TRUE!";
}

function noReturn(){
   let x = 5;
   return;
}

const truthy = toString(true); //Call a function