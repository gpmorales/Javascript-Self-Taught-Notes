//Basics of JavaScript continued -> More Web/HTML oriented functions here
// Time setInterval() , endInterval && DATE time objects notes 

function timeOut(){
    let timer1 = setTimeout(firstMessage,2000); //runs function after N miliseconds
    let timer2 = setTimeout(secondMessage,5000);
    let timer3 = setTimeout(thirdMessage,9000);
}

/*
document.getElementById("myBtn").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Purchased");
}

*/
function firstMessage(){
    window.alert("Buy course")
}

function secondMessage(){
    window.alert("Buy course for only $500")
}

function thirdMessage(){
    window.alert("Buy course Please")
}

// setInterval() = invokes a function repeatedly after a n
//                 asynchronous function (doesnt pause execution)

function Intervals(){
let count = 0;
let max = window.prompt("Count up to what number?"); 
max = Number(max);

const myTimer = setInterval(countUp, 100);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }

}
}


// DATE OBJECTS
// -> allows us to work with dates and times

function DateObjs(){
    let date2 = new Date();
    date2 = date2.toLocaleString();

    let date = new Date(2022, 11, 28, 5, 30, 10);
    //year, month, day, hour, minute, seconds -> constructor args

    let currYear = date.getFullYear();
    let dayOfMonth = date.getDate();
    let dayOfweek = date.getDay();
    let month = date.getMonth();
    let hour = date.getHours();
    let minute = date.getSeconds();

    document.getElementById("myLabel").innerHTML += date + "  ";

    date.setFullYear(2023);
    date.setMonth(11);
    date.setHours(4);

    console.log(date);
    console.log(date2);
    console.log(currYear + "/" + dayOfMonth + "/" + dayOfweek);
}// DateObjs();


function DisplayTime(){ //Clock
    var myLabel = document.getElementById("currentTime");

    setInterval(ESTtime, 1000);


    function ESTtime(){
        let date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();
        let secs = date.getSeconds();
        let AmOrPm = hrs >= 12 ? "PM" : "AM";
        let secSpace = secs <= 9 ? "0" : ""
        myLabel.innerHTML = hrs + ":" + min + ":" + secSpace + secs + " " + AmOrPm;
    }

} DisplayTime();


