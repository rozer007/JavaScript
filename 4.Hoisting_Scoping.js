// hoisting means using a function or variable before declaring
// variable declare using var can hoist let and const can't be hoist

console.log(a) // will give undefined
var a=10
console.log(a)


hello()  // function hoisting
function hello()
{
    console.log("Hello")
}

// In arrow function hoisting 

// hello1()  // will give an error
let hello1=()=>
{
    console.log("Hello world")
}
hello1()

//Scoping

//Block scope (let is use in block scope)
let s= "A"
{
    let s ="Block scope" // this variable is only available in this scope
    var s1="abc"  //this will be available outside the scope
    console.log(s) 
}
console.log(s)
console.log(s1)

//function scope
// here both var and let can be used

function scope()
{
    let sp=12
    var sp1=14
    // both this variable is only available in this scope
    console.log(sp,sp1)
}
scope()

/*console.log(sp)
console.log(sp) --> This will give an error since this variablr are declare inside the function*/ 

var global =100 // this variable will be available throughout the program

function glo()
{
    console.log(global+100)
}
glo()





