// BASICS 9 -> Canvas and Window interface
// Canvas API and more complex Javascript projects
// Used for animations, games, and data visualizations

function basicCanvas(){ //Trivial
    let Canvas = document.querySelector("#myCanvas");
    let CanvasContext = Canvas.getContext("2d"); //Painting within picture frame
    //To draw on the canvas we need to draw on the canvas context

    // Like the turtle
    CanvasContext.beginPath();

    CanvasContext.moveTo(0,0);  //Top left

    CanvasContext.lineTo(250,250);
    CanvasContext.lineTo(0,500);
    CanvasContext.lineTo(250,250);
    CanvasContext.lineTo(500,500);
    CanvasContext.lineTo(250,250);
    CanvasContext.lineTo(500,0);

    CanvasContext.stroke();

} //basicCanvas();



// The window interface allows us to talk with the web browser 
// The DOM (Document Object Model) is actually a property of Window
function Window(){

    console.dir(window);

    //Window has many properties and methods such as:
    // Animation()
    // AbortController
    // Array()
    // BlobEvent()
    // CSS : Object
    // Cache : function
    // Clipboard : function()
    // DOMException : function()
    // Document : function()

    //console.log(window.innerWidth);
    //console.log(window.innerHeight);
    //console.log(window.scrollX);
    //console.log(window.scrollY);

    console.log(window.location.href);

} Window();
