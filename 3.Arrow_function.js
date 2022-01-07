let arrow = () =>
{
    console.log("Hello World");
}
arrow()
console.log(arrow)



//with arguement arrow function

let print = name =>
{
    console.log("Hello "+name)
}

print("Sanji")

let arrow1 = (a,b) =>
{
    return a+b
}

console.log(arrow1(12,11))

let sub = (a,b) => a-b

console.log(sub(12,2))


//passing arrow function as arguement

function higher(data,callback)
{
    callback("Data : " + data)
}


higher(21100,(data)=>console.log(data))

