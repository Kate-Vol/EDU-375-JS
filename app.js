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

//const link = heading3.children[0]
const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})
setTimeout(() => {
    addStylesTo(link, 'all you', 'blue')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'grey'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: undefined, null, 0, false
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () =>{ //mdn mouse events справочник по событиям - события мыши
                                //https://developer.mozilla.org/ru/docs/Web/Events
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'gray'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = 'gray'
    }
})