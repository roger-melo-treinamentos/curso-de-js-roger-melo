/*
  01 - Suba o seu servidor local e:

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/
const my3FavoriteTVShows = ['Breaking Bad', 'Mr. Robot', 'Better Call Saul']
const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows.slice(0, 1)}, ${my3FavoriteTVShows.slice(1, 2)} e ${my3FavoriteTVShows.slice(2, 3)}.`
//console.log(sentence)

/*
  02 - Comente o console.log() acima e:

  - Exiba no console um boolean indicando se o array de séries que você criou  
    possui 3 itens.
*/
//console.log(my3FavoriteTVShows.length === 3)

/*
  03 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/
const randomTVShow = 'Watchmen'
const isRandomTVShowIncluded = my3FavoriteTVShows.includes(randomTVShow)
//console.log(isRandomTVShowIncluded)

/*
  04 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof isRandomTVShowIncluded}.`
//console.log(typeSentence)

/*
  05 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."
*/
const primLetr = (typeSentence.length > 39).toString().split('')
primLetr[0] = primLetr[0].toUpperCase()
let primmm = primLetr

//console.log(`A string que a typeSentence" armazena tem mais de 39 caracteres? ${primmm.join('')}.`)


/*
  06 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."
*/

const falsyValues = [0, "", false, '', ``, null, undefined, NaN]
//console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${typeof falsyValues[2]}.`)

/*
  07 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
  - Você sabe por que essa conversão resultou em true? 
*/
const crazyOperation = null + 1
const crazyConversion = !!crazyOperation
//console.log(crazyConversion) // por que deu resultado 1, 1 é verdadeiro.

/*
  08 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
*/
const ages = [31, 82, 61, 11]
const agesSum = ages[0] + ages[2]
//console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação é: ${agesSum <= 92}.`)

/*
  09 - Comente o console.log() acima e:

  - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de  
    dado que a "randomTVShow" armazena não é uma string;
  - Essa expressão deve resultar em false.
  - Exiba a "isNotAString" no console.
*/
const isNotAString = typeof randomTVShow !== 'string'
//console.log(isNotAString)

/*
  10 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers = [0, 2, 4, 6, 8, 10]
console.log(evenNumbers.find(x => x === 8) === 8 ? true : false)
console.log(!!(evenNumbers.find(x => x === 8)))