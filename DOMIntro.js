function foo(){
// *** DOM introduction ***
//  DOM stands for Document Object Model (An Application Programming Interface)
//  It is an interface for changing the content of a page
//
//  [Document]
//      | 
//      ---> { Root Element }
//           {    <html>    }
//                  |
//                  |---------->{ Element }
//                  |           { <head> } -------->{ Element }
//                  |                               { <title> }
//                  |                                    |
//                  |                                   {"My Title"}
//                  |---------->{ Element }
//                              { <body> }
//                                  |                                       
//                                  |--------->{ Element }                        
//                                  |          {  <h1>   }                                       
//                                  |               |
//                                  |               {"A heading"}                                      
//                                  |
//                                  |--------->{ Element }                                       
//                                             {   <a>   } -- [Attribute : href]
//                                                  |
//                                             {"Link Text"}
//
//
// Tree (Composed of Nodes) that represents our HTML document

//console.log(document); //Displays the DOM skeleton
//console.dir(document); //Lists Properties of my DOM
console.log(document.title); 
console.log(document.URL); 

document.title = "***Title Goes Here***";
document.body.style.backgroundColor = "DarkBlue";
document.getElementById("myDiv").innterHTML = "Good even";

// Document is the access point | Each Node can contain an object | This Tree serves as the model
// We an traverse the tree (traversing each node)
} 


//More element functions and stuff
function DOMElement(){
    let element = document.getElementById("myTitle");
    element.style.backgroundColor = "lightblue";
    element.innerHTML = "Hello World";


    // Retrieving elements by name rather than id (Both el attributes)
    //This returns a Node list of our inputs (like an array of elements)
    let Options = document.getElementsByName("Fruits");
    
    console.log(Options[0]);
    console.log(Options[1]);
    console.log(Options[2]);

    Options.forEach(FruitElement => {
        if(FruitElement.checked){
            console.log(FruitElement.value);
        }
    }); console.log();
    

    //forEach(element => f(every element))

    // Retrieving elements by TAG name
    let Vegies = document.getElementsByTagName("li");
    Vegies[0].style.backgroundColor = "lightgreen";
    Vegies[1].style.backgroundColor = "lightyellow";
    
    // Retrieving elements by CLASS name
    let desserts = document.getElementsByClassName("desserts");
    //returns an array-like object - Node[] list

    for(let i = 0; i < Vegies.length; i++){
        console.log(desserts[i].innerHTML);
    }


    // Retrieving elements by querySelector()
    // Allows the argument to be ids (#), names, tags, or classes(.) for the element we want to select

    let el = document.querySelector("#myTitle"); //Selects first element
    let elA = document.querySelectorAll(".desserts"); 
    let elB = document.querySelectorAll("[for]");  //selects every attribute with the given name

    el.style.backgroundColor = "lightpink";
    elA.forEach(divEl => {divEl.style.backgroundColor = "lightblue"});
    elB.forEach(AttributeEl => {AttributeEl.style.backgroundColor = "green"});

} // DOMElement();


//DOM TRAVERSAL TECHNIQUES  

//                |----[<ul> id = "fruit"] <- This is the first child Node
//                |
// [ <body> ] ----|----[<ul> id = "vegetable"] <- These are sibling nodes
// Parent Node    |
//                |----[<ul> id = "dessert"] <- This is the last child Node

function DOMTraversal(){
    let parentElement = document.body;
    let firstChild = parentElement.firstElementChild;

    firstChild.style.backgroundColor = "lightblue";

    let MiddleChild = document.querySelector("#vegetable");
    let parentEl = MiddleChild.parentElement;
    parentEl.style.backgroundColor = "lightgray";

    let nextSibling = MiddleChild.nextElementSibling;
    nextSibling.style.backgroundColor = "lightpink";

    let prevSibling = MiddleChild.previousElementSibling;
    prevSibling.style.backgroundColor = "purple";

    //We can access each subtree of elements as seen

    let VeggieNode = document.querySelector("#vegetable");
    let lastEl = VeggieNode.lastElementChild;
    lastEl.style.backgroundColor = "red";

    //.children[] technique
    VeggieNode.children[0].style.backgroundColor = "white";
    VeggieNode.children[1].style.backgroundColor = "blue";

    let Children = Array.from(document.querySelector("#dessert").children)

    Children[2].style.backgroundColor = "green";

} //DOMTraversal();


// Add/Change HTML elements
function HTMLstuff(){
    const nameTag = document.createElement("h1")
    nameTag.textContent = "Hello";
    document.body.append(nameTag);


    const mylist = document.querySelector("#fruit");
    const newListItem = document.createElement("li"); //li stands for List item
    newListItem.textContent = "mango";
    mylist.append(newListItem);
    //mylist.prepend(newListItem);

    const newListItem2 = document.createElement("li"); //li stands for List item
    newListItem2.textContent = "cherry";
    mylist.insertBefore(newListItem2, mylist.getElementsByTagName("li")[3]);

} // HTMLstuff();


//Changing CSS properties using Javascript
function CSSstyles(){
    const title = document.querySelector("#myHeader");
    title.style.color = "rgb(50,200,250)";
    title.style.backgroundColor = "#222222";
    title.style.fontFamily = "Times New Roman";
    title.style.border = "1.3px solid";
    title.style.textAlign = "center";
} CSSstyles();