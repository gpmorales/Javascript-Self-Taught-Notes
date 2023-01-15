// More Javascript/HTML elements such as the CheckBox and Other Syntax for Conditionals and Loops

document.getElementById("submitBtn").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    const myRadialBtn = document.getElementById("MsgBox");

    if(myRadialBtn.checked && myCheckBox.checked){
        document.getElementById("verify").innerHTML = "Congrats, Thank you for Applying and for receiving Txt Msgs!";
    }

    else if(myCheckBox.checked){
        document.getElementById("verify").innerHTML = "Congrats, Thank you for Applying!";
    }

    else{
        document.getElementById("verify").innerHTML = "Please agree to terms!";
    }

}


function BasicLoops(){
    //For-loop
    for(let i = 0; i < 12; i++){
        console.log(i);
    }

    //While loops plus break statements
    let j = 19;
    while(true){
        if(j % 2 == 0)
            j = j/2;
        else
            j = j*3 + 1;

        if( j == 1) break;
    }

}


//1-D Arrays in Javascript --> Dynamic and mutuable and like the lists in Python
function Arrays(){
    //Behave like java arraylists and python lists + we can add els w index selections
    let naturalNums = [1,2,3,4,5];
    naturalNums.pop(); //Can behave like Stack
    naturalNums.push(5);

    naturalNums[0] = 0.1;

    naturalNums[naturalNums.length + 1] = 8;

    naturalNums.push(12);
    naturalNums.unshift("Hello"); //We can Add element or shift existing element to front (acts like Queue)
    console.log(naturalNums);

    console.log(naturalNums.indexOf(4));

    let Words = ["sdf", "asdf" , "bb" , "z", "re"];
    Words.sort();

    //2D Arrays - an array of arrays
    let TwoDArray = [Words, naturalNums];
    for(let i = 0; i < TwoDArray.length; i++){
        for(let item of TwoDArray[i]){ //FOR EACH LOOP:w
            console.log(item);
        }
        console.log("\n");
    }

    TwoDArray[1][0] = "3.1415";

}

//Arrays();


//CALLBACKs -> passing in a function as another functions parameter

let x = Math.sin(3);
Integrate(x, 0, Math.PI, displayConsole);

function displayConsole(output){
    console.log(output)
}

function Integrate(func, a, b, callBack){
    var result = func + a + b;
    callBack(result);
}

// More basic Array Functions
// Arrays -> array.forEach() Method & array.map()
function ArrayFuncs(){
    let studentsGPAs = [ 1.2 , 3.4, 5.2, 6.2, 7.8 ];
    studentsGPAs.forEach(biasCorrect);

    function biasCorrect(element, index, array){
        array[index] = element * 0.86;
    }

    console.log(studentsGPAs);

    function biasCorrectB(element){
        return element / 0.5;
    }

    //array.map() applies callback function to each element AND creates a new array
    let newstudentGPA = studentsGPAs.map(biasCorrectB);
    console.log(newstudentGPA);
}

ArrayFuncs();


//Object - Oriented - Programming in Javascript
const CarObj = {
    model : 'mustang',
    color : 'red',
    year : 2023,

    drive : function(){
        console.log("Stepped on the gas");
    },

    brake : function(){
        console.log("Stepped on the brakes");
    }

}

console.timeLog(CarObj.model); //Object.attribute
console.timeLog(CarObj.drive()); //Object.function()

// Classes = a blueprint for creating and defining the properties and methods for an object and its behaviour
class Player{
    score;
    numOfLives;

    // Constructor -> runs when an object is instantiated
    constructor(score, numOfLives){
        this.score = score;
        this.numOfLives = numOfLives;
    }

    pause(){ console.log("You paused the game"); }

    exit(){ console.log("End all processes"); }

}

const player1 = new Player(); //Instantiate an object of the Player class
player1.exit();
player1.pause();