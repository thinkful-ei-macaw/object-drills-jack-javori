'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration : function() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());

const objectFive = {
  foo: 'foo',
  bar: 29,
  fum: 'lump',
  quux: false,
  spam: true,
};

for(const key in objectFive) {
  console.log(`Property: ${key} Value: ${objectFive[key]}`);
}



const food = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea',
'dinner', 'supper'],
};

console.log(food.meals[5]);

function Person(name, jobtitle) {
  this.name = name;
  this.jobtitle = jobtitle;
}

const newArray = [new Person('Dog', 'Police'), new Person('Fish', 'Doctor'),
new Person('Cat', 'Teacher'), new Person('Squirrel', 'Firefighter'),
new Person('Rabbit', 'Banker')];

for(let i in newArray) {
  console.log(newArray[i]);
}
