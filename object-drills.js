'use strict';

/******************* */
/* Problem 1 */
/******************* */

const loaf = {
  flour: 300,
  water: 210,
  hydration : function() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());

/******************* */
/* Problem 2 */
/******************* */

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

/******************* */
/* Problem 3 */
/******************* */

const food = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea',
    'dinner', 'supper'],
};

console.log(food.meals[5]);

/******************* */
/* Problems 4 & 5 */
/******************* */

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

/******************* */
/* Problem 6 */
/******************* */

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

/******************* */
/* Problem 7 */
/******************* */

function Character(name, nickname, race, origin, attack, defense, weapon) {
  this.name = name;
  this.nickname = nickname;
  this.race = race;
  this.origin = origin;
  this.attack = attack;
  this.defense = defense;
  this.weapon = weapon;
  this.describe = function() {
    return `${name} is a ${race} from ${origin} who uses a ${weapon}`;
  };
  this.evaluateFight = function(character) {
    let x = character.defense - this.damage;
    let y = this.defense - character.damage;
    if(this.defense > character.attack) {
      return `${character} took no damage.`;
    }
    else {
      return `Your opponent takes ${x} damage and you recieve ${y} damage`;
    
    }
  };
}

const characterArray = [
  new Character('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'), 
  new Character('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'), 
  new Character('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'), 
  new Character('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'), 
  new Character('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'), 
  new Character('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 2, 'Hadhafang')
];

characterArray.find(e => e.nickname === 'aragorn').describe(); 

const hobbits = characterArray.filter(e => e.race === 'Hobbit');

const attackOverFive = characterArray.filter(e => e.attack > 5);

console.log(attackOverFive);

/******************* */
/* Bonus Problem I */
/******************* */

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const queryKeys = Object.keys(query);
  let searchResult = arr.find(obj => queryKeys.every(e => query[e] === obj[e]));
  return searchResult === undefined ? null : searchResult;
}

findOne(HEROES, { id: 1 });

findOne(HEROES, { id: 10 });

findOne(HEROES, { id: 2, name: 'Aquaman' });

findOne(HEROES, { id: 5, squad: 'Justice League' });

findOne(HEROES, { squad: 'Justice League' });

/******************* */
/* Bonus Problem II */
/******************* */

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(id) {
    return this.store.heroes.find(e => e.id === id.id);
  }
};

console.log(Database.findOne({ id: 2 }));
