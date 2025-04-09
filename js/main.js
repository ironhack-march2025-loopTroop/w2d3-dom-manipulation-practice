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

const first = document.querySelector("header h2");
const all = document.querySelectorAll("header h2")

all.forEach( elm => {
    elm.style.color = "purple" //querySelectorAll returns a nodelist (we can use forEach)
})

