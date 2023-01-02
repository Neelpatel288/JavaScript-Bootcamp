const add = () => {
    return arguments[0] +arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    colour: 'Red',
    getSummary() {
        return `The car is ${this.colour}`
    }
}

console.log(car.getSummary())