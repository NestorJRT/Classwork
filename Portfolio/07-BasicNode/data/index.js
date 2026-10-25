const sw = require('star-wars-quotes');
const { randomSuperhero } = require('superheroes');
const { randomSupervillain } = require('supervillains');
const fs = require('fs');

console.log('Hello, world!');
console.log(sw());
console.log(`${randomSuperhero()} battles ${randomSupervillain()}!`);
console.log(fs.readFileSync(`${__dirname}/input.txt`, 'utf8'));
