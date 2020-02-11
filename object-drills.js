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

function Person(name, jobTitle, boss) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.boss = boss;
}

const newArray = [new Person('Dog', 'Police', 'Squirrel'), new Person('Fish', 'Doctor', 'Squirrel'),
new Person('Cat', 'Teacher', 'Squirrel'), new Person('Squirrel', 'Firefighter'),
new Person('Rabbit', 'Banker', 'Squirrel')];

// for(let i in newArray) {
//   console.log(newArray[i]);
// }

newArray.forEach(employee => {
  employee.boss ? 
  console.log(`${employee.jobTitle} ${employee.name} reports to ${employee.boss}`) :
  console.log(`${employee.jobTitle} ${employee.name} doesn't report to anybody`);
});

function decode(string) {
    
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };

  return cipher[string[0]] ? string.charAt(cipher[string[0]]-1) : ' ';

}

function decodeWords(words) {
  return words.split(' ').map(e => decode(e)).join('');
}

let encrypted = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(encrypted));

