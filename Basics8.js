//BASICS 8 -> Editing HTML elements
function promptUser(){ 

const myButton = document.querySelector("#mybtn");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {

    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
        //myImg.style.display = "block"; //will shift elements when we remove img 
    }

    else{
        myImg.style.visibility = "hidden";
        //myImg.style.display = "none"; //will shift elements when we remove img 
    }

});

} 


//DETECT KEY PRESSES
function KeyPresses(){

    const myDiv = document.querySelector("#aDiv"); //Selects our Div element

    var Xpos = 0;
    var Ypos = 0;

    window.addEventListener("keydown", moveOnKeyPress); //evenListen(Event, callBack function)

    function moveOnKeyPress(event){

        switch(event.key){

            case "ArrowDown":
                //Mode Div element 20 pixels downwards
                Ypos+=10;
                myDiv.style.top = Ypos + "px";
                break;

            case "ArrowUp":
                //Mode Div element upwards 
                Ypos-=10;
                myDiv.style.top = Ypos + "px";
                break;

            case "ArrowRight":
                //Mode Div element to the right 
                Xpos-=10;
                myDiv.style.right = Xpos + "px";
                break;

            case "ArrowLeft":
                //Mode Div element to the right 
                Xpos+=10;
                myDiv.style.right = Xpos + "px";
                break;

            default: //Default case if the buttons above arent pressed
                break; //Doesnt really matter since this is an async function/operation

            /*
            case "j":
                //Mode Div element 20 pixels downwards
                Ypos+=10;
                myDiv.style.top = Ypos + "px";
                break;
            */
        }

    } 


} KeyPresses();

//Animation in JAVSCRIPT

function Animations(){
    const myBtn = document.querySelector("#newBtn");
    const myAnimation = document.querySelector("#otherDiv");

    myBtn.addEventListener("click", Animation);

    function Animation(){
        let TimerID = null;
        var t = 0;
        var Y = Math.sin(0);

        function Frame(){
            if(t >= 600){
                clearInterval(TimerID);
            }
            else{
                t += 30;
                Y += 90 * Math.sin(t);
                myAnimation.style.left = t + "px";
                myAnimation.style.bottom = Y + "px";
            }
        }


        TimerID = setInterval(Frame, 40); //Repeat the function Frame every 2000 miliseconds

    }

} Animations();


