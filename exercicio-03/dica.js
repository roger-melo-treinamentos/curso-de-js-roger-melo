// Arrays
let heroes = ['Batman', 'Superman', 'Constantine']

heroes[2] = 'Mulher-Maravilha' // atribuição
console.log(heroes);
console.log(heroes[0]);

const ages = [31, 25, 39, 40]
console.log(ages);

const randomArray = ['Parker', 'Diana', 20, 40]
console.log(randomArray);
// Métodos de arrays

console.log(heroes.length);
const joinHeroes = heroes.join()
console.log(joinHeroes);
const indexOf25 = ages.indexOf(25)
console.log(indexOf25);

const moreHeroes = heroes.concat(['Wolverine', 'mulher-vespa'])
console.log(moreHeroes);

const pushToHeroes = heroes.push('Cyclops', 'Hulk') // multação de valores
console.log(heroes);
console.log(pushToHeroes);

const popHeores = heroes.pop()
console.log(heroes);
console.log(popHeores);

// parte 2

let emptiness = null

console.log(emptiness, emptiness +3, `o valor é ${emptiness}`);

