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