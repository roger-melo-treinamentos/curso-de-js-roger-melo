/*
01 - Gere um novo array com os números impares do array abaixo e exiba
o novo array no console.
Dica: pesquise por remainder operator (%)
*/
const randomNumbers = [10, 30, 15, 25, 50, 40, 5];
const addNumbers = randomNumbers.filter(
  (randomNumber) => randomNumber % 2 === 1
);
console.log(addNumbers);

/*
02 - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/
const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];
const crazyNumbersCount = crazyNumbers.reduce(
  (accumulator, crazyNumber) =>
    crazyNumber < 501 ? accumulator + 1 : accumulator,
  0
);
console.log(crazyNumbersCount);

/*
03 - Gere um novo array com cada um dos números abaixo elevado ao quadrado e 
exiba o novo array no console.
Dica: pesquise por exponentiation operator (**)
*/

const numbers = [5, 7, 3];
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers);

/*
04 - Utilizando o array abaixo, gere um novo array com apenas os filmes
lançados antes do ano 2000;
- Exiba o novo array no console.
*/
const Movies = [
  { name: "Bastardos inglórios", release: 2009 },
  { name: "Pulp Fiction", release: 1994 },
  { name: "Kill Bill: Volume 2", release: 2004 },
  { name: "Quatro Quartos", release: 1995 },
  { name: "Sin City", release: 2005 },
  { name: "Era uma vez em... Hollywood", release: 2019 },
  { name: "Django Livre", release: 2012 },
  { name: "Cães de Aluguel", release: 1992 },
  { name: "À Prova de Morte", release: 2007 },
  { name: "Kill Bill: Volume 1", release: 2003 },
];

const moviesBefore2000 = Movies.filter(({ release }) => release < 2000);
console.log(moviesBefore2000);

/*
05 - Gere um novo array que contem apenas os nomes das séries abaixo:
- Exiba o novo array no console.
*/
const tvShows = [
  { name: "Bastardos inglórios", releaseYear: 2009 },
  { name: "Pulp Fiction", releaseYear: 1994 },
  { name: "Kill Bill: Volume 2", releaseYear: 2004 },
  { name: "Quatro Quartos", releaseYear: 1995 },
  { name: "Sin City", releaseYear: 2005 },
  { name: "Era uma vez em... Hollywood", releaseYear: 2019 },
  { name: "Django Livre", releaseYear: 2012 },
  { name: "Cães de Aluguel", releaseYear: 1992 },
  { name: "À Prova de Morte", releaseYear: 2007 },
  { name: "Kill Bill: Volume 1", releaseYear: 2003 },
];

const showNames = tvShows.map(({ name }) => name);
console.log(showNames);

/*
06 - Exiba no console um lista dos nomes dos jogos do array abaixo;
- A lista deve ter a formatação exemplificada abaixo do array, considerando
inclusive o traço e o espaço antes de cada nome.
DICA: para quebrar linha, você pode usar dentro da string o caractere especial \n.
*/

const cart = [
  { name: "Bastardos inglórios", releaseYear: 2009 },
  { name: "Pulp Fiction", releaseYear: 1994 },
  { name: "Kill Bill: Volume 2", releaseYear: 2004 },
  { name: "Quatro Quartos", releaseYear: 1995 },
  { name: "Sin City", releaseYear: 2005 },
  { name: "Era uma vez em... Hollywood", releaseYear: 2019 },
  { name: "Django Livre", releaseYear: 2012 },
  { name: "Cães de Aluguel", releaseYear: 1992 },
  { name: "À Prova de Morte", releaseYear: 2007 },
  { name: "Kill Bill: Volume 1", releaseYear: 2003 },
];

const productList = cart.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ""
);
console.log(productList);

/*
07 - Método reduce() usando objetos  
*/

const products = [
  { name: "iPhone", price: 999, stock: 10 },
  { name: "MacBook", price: 1499, stock: 5 },
  { name: "iPad", price: 799, stock: 20 },
];

const totalPrice = products.reduce(
  (accumulator, { price, stock }) => accumulator + price * stock,
  0
);

console.log(totalPrice);

/*
08 - Método reduce() usando objetos mais complexo 
*/
const transactions = [
  { type: "deposit", amount: 500 },
  { type: "withdraw", amount: 200 },
  { type: "deposit", amount: 1000 },
  { type: "withdraw", amount: 500 },
];

const startingBalance = 0;

const currentBalance = transactions.reduce(
  (accumulator, currentValue) =>
    currentValue.type === "deposit"
      ? accumulator + currentValue.amount
      : accumulator - currentValue.amount,
  startingBalance
);

console.log(currentBalance); // Output: 800

/*
09 - function callback 
*/

function executaAlgumaCoisa(callback) {
  console.log("Executando a função principal...");
  callback();
}

function funcaoCallback() {
  console.log("Executando a função de callback...");
}

executaAlgumaCoisa(funcaoCallback);

/*
10 - function callback mais complexo 
*/
function carregaDados(url, callback) {
  console.log("Carregando dados de " + url);

  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Define a função de callback para quando a requisição for concluída
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    }
  };

  // Abre a conexão e envia a requisição
  xhr.open("GET", url, true);
  xhr.send();
}

function exibeDados(dados) {
  console.log("Dados carregados: " + dados);
}

carregaDados("https://jsonplaceholder.typicode.com/todos/1", exibeDados);

/*
11 - function async / await  
*/
async function buscarUsuarioAsyncAwait(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const usuario = await response.json();
  return console.log(usuario);
}
buscarUsuarioAsyncAwait(1);

const buscarUsuarioAsyncAwait2 = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const usuario = await response.json();
  return console.log(usuario);
};
buscarUsuarioAsyncAwait2(2);
