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


arr =[ 1,2,3,4,5,6]

console.log(arr.includes(5))
console.log(arr.includes(51))

arr.forEach((number)=>
    {
        console.log(number*10)
    })

let arr1=arr.map(n =>
    {
        return n * 0.1
    })

console.log(arr1)


let arr2=arr.filter(n=>
    {
        return n%2==0;
    })

console.log(arr2)

//find return the first element that statisfied the function
let f=arr.find(n=>
{
    return n%2
})

console.log(f)


let s=arr.some(n=>
{
    return n%2
})

console.log(s)

let e=arr.every(n=>
{
    return n%2
})

console.log(e)

//reduce function

let sum = arr.reduce((sum,n)=>  //here sum is the accumulator
{
    return sum+n
})

console.log(sum)

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

console.log(JSON.stringify(obj))

let arrobj=[
    {price :10},
    {price :102},
    {price :121},
    {price :112},
    {price :13},
    {price :12},
]

let sum1 = arrobj.reduce((s,item)=>{

        return s+item.price
    },0) //default the value of s = 0

console.log(sum1)
