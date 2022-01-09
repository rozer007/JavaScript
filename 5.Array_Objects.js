//Array

let arr =[ 1,2,3,4,5,6]

console.log(arr)
console.log(arr[3])

arr.push(7)
arr.push("Hello")

console.log(arr)

arr=[
    [1,2],
    ["a","b"]
]

arr.push(["hi","bye"])

console.log(arr)
console.log(arr[2][1])

console.log(arr.length)
console.log(arr[2].length)


//Object

let obj={
    name:"hello",
    array:["A","B","C"],
    ob:{
        a:1,
        b:2
    },
    hello:function()
    {
        console.log("Hello")
    },
    hello1()
    {
        console.log("Hello -> 1")
    }
}

console.log(obj.name)
console.log(obj["name"])

console.log(obj.ob.a)

console.log(obj.array[1])

obj.hello()
obj.hello1()
