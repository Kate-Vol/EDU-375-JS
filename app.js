const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')
//console.dir(heading2.textContent)
// const heading2= document.querySelector('.h2-class')
//const heading2= document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2= document.querySelector('h2')
//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
    addStylesTo(heading2, 'need', 'yellow', '2rem')
}, 4500)

setTimeout(() => {
    addStylesTo(heading3, 'all you', 'blue')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'grey'
    node.style.padding = '2rem'
    // falsy: undefined, null, 0, false
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () =>{ //mdn mouse events справочник по событиям
    console.log('click')
}