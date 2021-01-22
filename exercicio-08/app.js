/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
/*
function multiplicação (num1 = 0, num2 = 0) {
  return num1*num2
}

console.log(multiplicação(2,5))
*/



/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
/*
const divisao = function (num1 = 0, num2 = 0) { 
  return num1/num2
}

console.log(divisao(10,2))
*/




/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
/*
let message = function(value = 'Essa opção não pode estar em branco') {
  console.log(value)
}

  for(let i = 0; i < 7; i++) {
  counter = i+1
  message(`Esta é a ${counter}ª vez que essa string é exibida.`)
  }
*/



/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

/*
function exibirArrayNovo (newArray = []){
for(let i = 0; i < millennialWords.length; i++) {
   newArray.push(millennialWords[i].toUpperCase())
  }
  return newArray
}

console.log(exibirArrayNovo())
*/


//-----  CORREÇÃO PROFESSOR ROGER ----->>>
/*
let message = function(value) {
  console.log(value)}

const transformToUppercase = function(array = []){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    const wordInUpperCase = array[i].toUpperCase()
    newArray.push(wordInUpperCase)
  }
  return newArray
}
const millennialWordsInUpperCase = transformToUppercase(millennialWords)

message(millennialWordsInUpperCase)
*/







/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
/*
let positivos = 0;
let negativos = 0;
let total = 0;

function positivoNegativo(number) {
for(let i = 0; i < randomNumbers.length; i++){
  if(randomNumbers[i] >= 0 ) { positivos++ } else { negativos++ }
  total++
    }
  return console.log(`O array "randomNumbers" possui ${total} números, sendo ${positivos} positivos e ${negativos} negativos.`)
}

positivoNegativo()
*/

//-----  CORREÇÃO PROFESSOR ROGER ----->>>
/*
let positiveCount = 0;
let negativeCount = 0;

const isPositive = function (number = 0) {
  return number >= 0
}

for(let i = 0; i < randomNumbers.length; i++){
  const isPositiveNumber = isPositive(randomNumbers[i])
  if(isPositiveNumber){
    positiveCount++
  } else { negativeCount++}

}

console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveCount} positivos e ${negativeCount} negativos.`)
*/

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

/*
function getOddNumbers(OddNumbers = []) {
  const newOddNumbers = []

  for(let i = 0; i < OddNumbers.length; i++){
    const isOddNumber = OddNumbers[i]%2 !== 0

    if(isOddNumber) { 
      newOddNumbers.push(OddNumbers[i])
    }
  }
  return newOddNumbers
}

console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))
*/





/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]
/*
let sentence = ''

for(let i = 0; i < functions.length; i++){
let frase = `${functions[i]()} `
  sentence += frase
}

console.log(sentence)
*/