//window
// console.log(window)

// //documentx
// console.log(document)
// console.log(document.documentElement)

// const element = document.createElement("span")
// element.innerText="Hello World"
// document.body.appendChild(element)

//id  selector
const divid=document.getElementById("div-id")
divid.style.color="orange"

//class selector -> this will return an html array of element that match the class name

const divclass= document.getElementsByClassName("div-class")
// console.log(divclass)

const divclassArray=Array.from(divclass)
divclassArray.forEach(element => {
    element.style.color="violet"
})

divclass[1].style.color="green"

//query selector and query selectorall

const att = document.querySelector("[data-test]") // for one individual element 
console.log(att)
att.style.color="green"

console.log(document.querySelector(".div-class"))// only select the first element 

const att1 = document.querySelectorAll(".div-class") // give all the div of the class
console.log(att1)
console.log(typeof att1) // node list object

att1.forEach(ele=>{
    ele.style.color="blue"
})

console.log(document.querySelector("input")) // select the input tag
console.log(document.querySelector("body > input[type='text']")) //select the input of type - text inside the body




