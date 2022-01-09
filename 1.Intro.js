let c ="hello world"
console.log(c);

c=1;
console.log(c)

// let c=90 --> will give an error

const a = "HI"

// a="bye"   --> will give an error

var b =12
console.log(b)
var b = "Hello"
console.log(b)

let d
console.log(d) // will give an undefined
console.log(typeof d)

d=null
console.log(d) // will give null
console.log(typeof d)  //null is treated as an object in javascript

let eql1 = null
let eql2 = undefined
console.log(eql1==eql2)  //will give true since both repesent nothing



//type conversion

let n = "10"

let sum =n+10
console.log(sum)
sum =parseInt(n)+10
console.log(sum)

n="90.99"
console.log(typeof parseFloat(n))

let num=1000

console.log(typeof num)
console.log(typeof num.toString())




// == and ===

let eq=1
let eq1= "1"

console.log(eq==eq1)
console.log(eq===eq1)

eq=null
eq1=undefined

console.log(eq==eq1)
console.log(eq===eq1)

//!= and !==
console.log(eq!=eq1)
console.log(eq!==eq1)


//NaN  --> Not A Number

let st="andnd"

console.log(parseInt(st))
console.log(parseInt(st)==NaN)


console.log(isNaN(parseInt(st)) )