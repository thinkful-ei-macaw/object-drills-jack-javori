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

