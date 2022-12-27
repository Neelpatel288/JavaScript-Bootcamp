const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')
ps.forEach (function (p) {
    p.textContent = '******'
    // console.log(p.textContent)
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScipt'
document.querySelector('body').appendChild(newParagraph)