class Person {
    constructor(name, age, mother) {
      this.name = name;
      this.age = age;
      this.mother = mother;
    }
  }


// function person() {
//     this.constructor = function(name) {
//         console.log('here?!')
//         this.name = name
//     }
// }
  
  const tim = new Person('Tim', 31, null);
  const tina = new Person('Tina', 57, null);
  
  tim.mother = tina;
  
  console.log(tim);
  
  const grandma = new Person('Sherry', 80, null);
  
  tina.mother = grandma;
  
  console.log(tim);


// const newPerson = new person('ted')
// console.log('newPerson', newPerson)