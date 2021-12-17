const macBook = {
    color: 'silver',
    turnOn: ()=>console.log('turn on'),
    turnOff: ()=>console.log('turn off')
}

const myComputer = Object.create(macBook, {owner: {value: 'ted'}})
console.log('myComputer', myComputer.__proto__ === macBook)

const newComputer = {...macBook, owner: 'teddy'}
console.log('newComputer', newComputer.__proto__ === macBook)

macBook.power = 'nice'

console.log(myComputer.power)
console.log(newComputer.power)