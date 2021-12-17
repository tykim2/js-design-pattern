function animalFactory() {
    this.createAnimal = function(animalType) {
        let animal

        if(animalType==='dog') {
            animal = new Dog()
        } else if(animalType==='cat') {
            animal = new Cat()
        }
        return animal
    }
}

function Dog() {
    this.makeSound = function () {
        console.log('dog dog')
    }
}

function Cat() {
    this.makeSound = function() {
        console.log('cat cat')
    }
}

// const _factory = animalFactory()
// console.log('_factory', _factory)
const factory = new animalFactory()
console.log('factory', factory)

const zoo = [factory.createAnimal('dog'), factory.createAnimal('cat')]

for(let z of zoo) {
    z.makeSound()
}


