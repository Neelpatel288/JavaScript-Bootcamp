// const myAge = 17
// const message = myAge >= 18 ? 'You can vote!' : 'you can not vote.'
// console.log(message)

const myAge = 20

const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error'
}

const message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

const team = ['Tyler', 'Porter']
const newMessage = team.length <= 4 ? `Team size : ${team.length}` : 'Too many people on your Team'

console.log(newMessage)