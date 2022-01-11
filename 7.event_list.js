//button
const but = document.querySelector('[data-btn]')
console.log(but)

but.addEventListener('click',()=>{
    // console.log("Cicked")
})

function printclick()
{
    // console.log("clicked func")
}

but.addEventListener('click',printclick)

but.removeEventListener('click',printclick)

but.addEventListener('click', e=>{  //e - eventlistener object
    // console.log(e)
})

// input

const inp = document.querySelector('[data-input-text]')
console.log(inp)

inp.addEventListener('change',()=>{
    // console.log("changed")
})//print when we change the output

inp.addEventListener('input', ()=>{
    // console.log("input")
})// print each time to update the input

inp.addEventListener('input',e=>{
    // console.log(e.target.value==="")
}) //check if the value is empty or not

//form

const form =document.querySelector('[data-form]')

form.addEventListener('submit',e=>{
    e.preventDefault()  //prevent the default behavior
    console.log("submitted form")
})

//prevent a tag

const link=document.querySelector('a')
link.addEventListener('click',e=>{
    e.preventDefault()
    console.log("Prevented")
})

//window

window.addEventListener('resize',()=> {
    console.log("resize")
})