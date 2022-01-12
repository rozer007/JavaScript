
//Normal Function

// function without parameter
hello()  //--> hoisting
function hello()
{
    console.log("hello World")
}
hello()


//function with arguements
function printvar(name)
{
    console.log("Hello "+name)
}

printvar("Luffy")

//function with arguements and return
function sum(a , b)
{
    return a+b
}

console.log(sum(1,2))


console.log(sum)  // will return the body of the function

//Higher Order Function

function higher(s)   //function which take function as an arguements
{
    return s(22,23)
}

console.log(higher(sum))

//The function which is being pass as the arguement is known as callback

function call(a,b,callback)
{
    return callback(a+b,10)
}

console.log(call(1,2,sum))

//example 2
function higher1(name,callback)
{
    callback(name+" Bye!!")
}

higher1("Bao",printvar)

//passing an anonymous function

higher1("Ace", function(name){
    console.log("Caio "+name)
})