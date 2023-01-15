//Events in Javascript
function JSEvents(){
    const buttonElem = document.getElementById("myButton");

    buttonElem.onclick = doSomething; //DO NOT INVOKE Function , instead perform a callback

    const bodyElem = document.body;

    //bodyElem.onload = doSomethingElse();

    // JAVASCRIPT EVENT EXAMPLES
    //element.onchange = callback
    //element.onclick = callback
    //element.onchange = callback
    //element.onmouseover = callback

    const divElement = document.getElementById("myDiv");

    divElement.onmouseover = Callback1; //Async operations 
    divElement.onmouseout = Callback2; //Async operations 

    divElement.onmousedown = Callback3;
    divElement.onmouseup = Callback4;

    function Callback4(){ 
        divElement.textContent = "Enter Name Again";
    }

    function Callback3(){ 
        divElement.textContent = "Now Let Go of Mouse";
    }

    function Callback2(){ 
        divElement.style.backgroundColor = "lightgreen"; 
    }

    function Callback1() {
        divElement.style.backgroundColor = "red";
    }

    function doSomething(){
        alert("Did something when I clicked!");
    }

    function doSomethingElse(){
        alert("Lol");
    }

} // JSEvents();

function promptUser(){
    //alert("Page Has Loaded!");
}


// EVENT LISTENERS in JAVASCRIPT
// .addEventListener(even, function, useCapture)
// You can add many event handlers to a single element
// Even the same event can invoke distinct functions

function EventListening(){

    const innerDiv = document.getElementById("innerDiv"); //The div element is a BLOCK ELEMENT
    const outerDiv = document.getElementById("outerDiv"); //The div element is a BLOCK ELEMENT

    innerDiv.addEventListener("mouseover", changeColor1);
    innerDiv.addEventListener("mouseover", changeColor1);
    innerDiv.addEventListener("mouseout", changeColor2);

    function changeColor1(){
        innerDiv.style.backgroundColor = "purple";
    }

    function changeColor2(){
        innerDiv.style.backgroundColor = "lightblue";
    }

    function changeColor3(){
        this.style.backgroundColor = "lightgreen";
    }

    innerDiv.addEventListener("click", changeColor3); //since both the outer div and inner div will be selected when we click, we have to distinguish using the useCpature parameter
    outerDiv.addEventListener("click", changeColor3, true);

} EventListening();
