/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      '

const newSting = myString.trim()


console.log(newSting)
/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const peopleCopy = people.map(({firstName,lastName, score}) => { 
  return {firstName, lastName, score}  
})

const greatestScore = peopleCopy
  .sort((item1, item2) => item2.score - item1.score)

 console.log(greatestScore)

/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const nanesWithMoreTreeLatters = animals.filter((animal => animal.length === 3))

console.log(nanesWithMoreTreeLatters)
/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/
const animalsNamelength = animals.map(animal => animal.length)

console.log(animalsNamelength)

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsNearMe = friends
  .filter(friend => friend.nearMe)
  .map((friend) => friend.name )

console.log(`${friendsNearMe}`)
/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const filterOdd = numbers
  .filter(number => number %2)
  .reduce((acc, number) => acc += number, 0)

console.log(filterOdd)
/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]


const sumCountry = data
  .filter(country => country.country !== 'China')
  .reduce((acc, country )=> acc =+ country.population, 0)
 
  console.log(sumCountry)