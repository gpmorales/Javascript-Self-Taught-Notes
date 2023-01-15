// Some More Basic programs that utilize the document.getElementbyID(), .onclick, and .innerHTML functions
// We will make a Counter program + More Math Functions

function Counter(){

    document.getElementById("IncrementBtn").onclick = function(){
        document.getElementById("CountLabel").innerHTML++;
    } 

    document.getElementById("DecrementBtn").onclick = function(){
        document.getElementById("CountLabel").innerHTML--;
    } 

    document.getElementById("ResetBtn").onclick = function(){
        document.getElementById("CountLabel").innerHTML = 0;
    } 

    document.getElementById("RandBtn").onclick = function(){
        var prevNumber = document.getElementById("CountLabel").innerHTML;
        document.getElementById("CountLabel").innerHTML = Math.floor(Math.random() * Math.abs(prevNumber)) + 1;
    } 

}

//Counter();

//String manipulation
function Strings(){
    let name = "Mister Rizley";
    console.log(name.charAt(4));
    name = name.concat(" Rizzles");
    console.log(name);
    console.log(name.length);
    console.log("Index of the first occurence 'i' : ", name.indexOf("i"));
    console.log("Index of the last occurence 'i' : ", name.lastIndexOf("i"));

    console.log(" woah what   ".trim());
    console.log(name.replaceAll("i", "o"));

    let Name = "Bro Code"
    var firstName = Name.slice(0,3);
    var lastName = Name.slice(4);
    console.log(firstName);
    console.log(lastName);

    //str.slice is equivalent to javas string.substring(start,end index) - non inclusive
    console.log(Name.slice(0, Name.indexOf(" ")));
    console.log(Name.slice(Name.indexOf(" ") + 1));
}

Strings();
