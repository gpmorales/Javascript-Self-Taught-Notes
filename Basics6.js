//import {PI, getCircumference} from "./Math_util.js";
import * as MathUtil from "./Math_util.js";

//BASICS 6 for Javascript -> Synchronous and Asynchronous Code

//Synchronous code => code that is executed in an ordered sequence
//                    Step-by-step linear instructions
//                    (start now, finish after x lines are executed from top to bottom, left to right)


//Asynchronous code => code that is NOT executed in an ordered sequence
//                     Ex: Accessing a database, fetching a file
//                     Entering a Queue, while others leave or enter; In general tasks that take time
//                    (start now, finish later while other parts of program cont to execute)

console.log("START");
setTimeout(() => console.log("This is an asynchronous cmd, happens out of sequence"), 2000);
console.log("END");

// *** Anonymous functions syntax -> someFunction((arguments) => { commands })

// Promise Objects =>
// promise = object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous objects do
//          
//           the STATE of a promise is either "pending" then "resolved" or "rejectd"
//           2 parts -> producing AND consuming

function Promises(){
    // Resolve and Reject are callbacks
    // inside the Promise constructor we pass in an anonymous function
    // ... which consists of an argument or an item => by the instructions that use these arguements to do something
    function ResolvingRejecting(){

        const wait = new Promise((resolve, reject) => {
            let fileLoaded = false;
            if (fileLoaded){
                resolve("File Loaded");
            }
            else{
                reject("File Not Found");
            }
        });


        wait.then(value => console.log(value))
            .catch(error => console.log(error));

    }


    const threadTerminated = true;

    if(threadTerminated){
        return Promise.resolve("Womp");
    }

    else return Promise.reject("Oops");

} Promises().then(success => console.log(success)).catch(failed => console.log(failed));


// ASYNC => allows a function to return a Promise object

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "Aysnc File Loaded";
        //equiv to return Promise.resolve("file loaded")
    }

    else{
        throw "File failed to Load";
        //equiv to return Promise.reject("file not found")
    }
}

//'then' keyword for Promise objects, is for when an async operation does execute 
//catch is for an error meaning our asynchronous function did not complete

loadFile().then(successfulReturnValue => console.log(successfulReturnValue))
          .catch(failedExecution => console.log(failedExecution));

// AWAIT -> makes as async function wait for a returned Promise object
// instead of then/catch we can simply have the async function wait
async function StartProcess(){
    try{
        //let msg = await locateFile();
        let message = await loadFile(); //replace loadFile.then.catch
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
} 

StartProcess();



// ES6 MODULES - the idea behind a module is that it's file of reusable code we can import
// We can import these sections of pre written code -> like libraries -> utilites
// This means we can create a module out of a single general use Javascript file
// To begin working with modules wew use this syntax in our html file:
//      <script type = module src = "Math_util.js"></script>

console.log(MathUtil.getCircumference(4));
