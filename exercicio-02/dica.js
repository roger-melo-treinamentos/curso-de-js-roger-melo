// tipos de dados

const number = 1
const string = ''
const boolean = true
// null = 'seta explicitamente uma variavel sem valor'
// Undefined = representa um valor nao-setado
// Object estruturas dde dados complexas -array,datas,literais,etc
// Symbol utilizado com objetos
// BigInt utilizado para manipular numerios muito grandes

// string
console.log('hello, world');

const email = 'thisouza@gg.com.br 0'

console.log(email);

// cocatenação de string
const firstName = 'Carmen'
const lastName = 'Sandiego'
const fullName = firstName + ' ' + lastName

console.log(fullName);

// acessando caracteres
console.log(fullName[0]);

// comprimento de uma string
console.log(fullName.length);

// métodos de string
console.log(fullName.toUpperCase());

const result = fullName.toLowerCase()
// não altera a string original
console.log(result);

const index = email.indexOf('@') // argumento

console.log(index);

// parte 2

// métodos comuns de string
const email2 = 'laracroft@thiago.com.br'
const lastIndexOfA = email2.lastIndexOf('t')
const emailSlice = email2.slice(0, 9)
const emailReplace = email.replace('l', 'y')

console.log(lastIndexOfA);

// parte 3 numbers

// inteiros decimais
const radius = 10
const pi = 3.14

console.log(radius, pi);

// operadores aritméticos
console.log(10 / 2);
const reminder = 5 % 2
const area = pi * radius ** 2

console.log(reminder);
// ordem de operação
const crazyOperation = 5* (10 - 3) ** 2

console.log(area);

// 1 parenteses
// 2 expoentes ou raizes
// 3 multiplicão e divisão
// 4 adição e subtração

// operadores de incremento e decremento
let postLikes = 10

postLikes ++
postLikes --

// operadores addition, subtraction, multiplication e division
postLikes += 10
postLikes -= 5
postLikes *= 3
postLikes /= 2
// NaN - not a number
console.log(7 / 'oi');

// cocatenação de string com número
const likesMessage = 'o post tem ' + postLikes + 'likes.'

console.log(likesMessage);


// parte 4 template strings
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem '+ postComments + ' comentários.'

console.log(postMessage);
console.log('Você manja do filme \'As Branquelas\'?');
// usando template strings
const postMessage = `O post ${postTitle}  , do ${postAuthor}   tem  ${postComments} comentários.`
// criando templates HTML

const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`
console.log(html);