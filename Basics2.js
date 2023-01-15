console.log("This is part TWO of the basics for Javascript");
// ACCEPTING USER INPUT and MORE ---->
 // Using window.prompt(msg);

 //let username = window.prompt("What is your username?");
 //console.log(username);

// More difficult -> internal Html script

let userName;
let counter = 0;
//userInput();

//We use this function as a block of code that will continously check if we click the button
function userInput(){

    document.getElementById("myButton").onclick = function() {

        userName = document.getElementById("myText").value; //retrieves the value of our text box (an input type w id = myText)
        console.log(userName);
        document.getElementById("myLabel").innerHTML = "Welcome " + userName;

    }

}

// Type Conversions ---->
//TypeConversions();

function TypeConversions(){
    let age = window.prompt("How old are you?");
    age = Number(age); //Number Constructor 
    console.log(typeof(age));
    age++;

    console.log("Happy birthday, you are" , age , "years old :( "); 
    age = String(age);

    console.log("\n");

    console.log(typeof(age));

    y = Boolean(""); //falsy
    console.log(String(12 + 4) + "2");
}


// Const Variables + JS Math Library ---->
//MathExample();
function MathExample(){
    const PI = 3.14159;
    let radius = window.prompt("What is the distance from the center to the edge?")

    //PI = 32; //Throws error, invalid because PI is a const and we cannot reassign its value
    var Area = radius * PI * radius;
    console.log(radius);

    //Basic math functions
    let x = Math.round(5.31);
    console.log(x);
    x = Math.pow(x + 0.2, 2);
    console.log(x);

    console.log(Math.ceil(x));
    console.log(Math.floor(x));

    var Max = Math.max(PI, Area, x, x + 12);
    console.log("\n" + String(Max));
    
    var Min = Math.min(PI, Area, x, x + 12);
    console.log("\n" + String(Min));
}


// Simple program that combines user input and some math functions
HypotenuseCalculator();

function HypotenuseCalculator(){ //Internal Html boxes to calculate hypotenuse of any valid triangle
    let clickCounter = 0;
    var Alen;
    var Blen;

    document.getElementById("SubmitButton").onclick = function() { //use .onclick call on button types
        if(clickCounter < 1){
            Alen = document.getElementById("AtextBox").value; //get input type element/box
            Blen = document.getElementById("BtextBox").value;
            Clen = Math.sqrt(Math.pow(Alen,2) + Math.pow(Blen,2));
            document.getElementById("Hypotenuse").innerHTML += Number(Clen);
        }
        clickCounter++;
    }
}

