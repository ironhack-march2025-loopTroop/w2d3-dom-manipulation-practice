/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title")
mainTitle.innerText = "Loop Troop E-Commerce"
mainTitle.style.color = "#33a"

// by class name
const infoCollection = document.getElementsByClassName("info")
const infoElementsArr = [...infoCollection] // convert html collection to an array
infoElementsArr.forEach( elm => {
    elm.style.color = "purple"
    elm.style.border = "2px solid purple"
    elm.style.padding = "1em"
    elm.style.backgroundColor = "#ddd"
})

// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p")


// by css selectors....
// - document.querySelector 
// - document.querySelectorAll

const first = document.querySelector("header h2")
const all = document.querySelectorAll("header h2")

all.forEach( elm => {
    elm.style.color = "purple" //querySelectorAll returns a nodelist (we can use forEach)
})



// 
// 
// Practice: selecting elements from the DOM
// 
// @LT: before doing the exercise, make a quick demo on how to change the style (e.g., elm.style.background = "orange")
// 
// - Instructions: https://stackblitz.com/edit/web-platform-ydtmzw?file=script.js
// - Time: 10-15min.
// - Solution: https://stackblitz.com/edit/web-platform-doucbe?file=script.js
// 
// 



//
// context: document vs. element
//

const allParagraphsInDocument = document.getElementsByTagName("p")

const productsElm = document.getElementById("products")
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p")

const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p")


/**************/
/* Properties */
/**************/

//Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu")

pikachuElm.innerHTML = `
    <div>
        <p>one<p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>
    `

//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us -- we're amazing"


//Read/Modify CSS --> elm.style
// mainTitle.style.color = "purple"
// mainTitle.style.backgroundColor = "yellow"
// mainTitle.style.border = "2px solid green";

//Read/Modify the id --> elm.id
mainTitle.id = "the-new-cool-id"

//Read/Modify class --> elm.className
// mainTitle.className = "highlighted"
mainTitle.className = "title rounded"



//(bonus) elm.classList (provides methods to access class names)
// 
// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("active")



/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const address = linkElm.getAttribute("href")
// console.log(address)

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com")
linkElm.setAttribute("target", "_blank")

// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img")

// step2: add content or modify (eg. innerText, attributes...)
newImg.setAttribute("src", "./images/pikachu.jpg")
newImg.setAttribute("alt", "beautiful pikachu image");

//step3: append to the dom: `parentElm.appendChild()`
const container = document.getElementById("pikachu")
container.appendChild(newImg)




/**************/
/**************/
/*   Events   */
/**************/
/**************/


/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)
- Full list: https://www.w3schools.com/jsref/dom_obj_event.asp

*/

//
// attach an event handler:
// - elm.addEventListener(typeOfEvent, code)
//

const btn1 = document.getElementById("button-1")

btn1.addEventListener("click", () => {
    console.log("hello world")
})



//
// Append a paragraph every time the user clicks on a the button with the id "add-paragraph"
//

const btn3 = document.getElementById("add-paragraph")
btn3.addEventListener("click", () => {
    // step1: create the element
    const newP = document.createElement("p")

    // step2: add content or modify (eg. innerText, attributes...)
    newP.innerText = "This paragraph was created dynamically."

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("box-3")
    parentElm.appendChild(newP)
})




//
// Detect spacebar + "event" object
//

document.addEventListener("keydown", (e) => {
    if(e.code === "Space") {
        console.log("user pressed spacebar")
    } else {
        console.log("user pressed other key....")
    }
})



//
// Attach an event listener to multiple elements
//

const allBtn = document.querySelectorAll(".btn")

allBtn.forEach((btnElm) => {
    btnElm.addEventListener("click", () => {
        console.log("click on a generic btn...")
    })
})
