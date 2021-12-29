// booleans e comparaçoes
console.log(true, false, 'true', 'false');

// metodos podem retornar booleans

const email = 'thisouza@thiago.com.br'
const includes = email.includes('thisouza')
const names = ['dio', 'thiago', 'robert']
const arrayIncludes = names.includes('dio')

// Operadores de comparação

const age = 31
const name = 'thiago'
console.log(age == 31);
console.log(age == 35);
console.log(age != 31); // diferente de
console.log(age > 31);
console.log(age < 32);
console.log(age >= 31);
console.log(age <= 31);

console.log(name == 'thiago') //igual a
console.log(name == 'Thiago')
console.log(name > 'belinha')
console.log(name > 'Thiago')
console.log(name > 'Belinha');

console.log('**********************');

//'igual a' e 'diferente de'
console.log(age == 31);
console.log(age == '31');
console.log(age != 31);
console.log(age != '31');

console.log('******************');
// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
console.log(age === 31);
console.log(age === '31');
console.log(age !== 31);
console.log(age !== '31');

console.log('*******');
// conversão de tipos
let score = '100'
score = Number(score)   // funçao construtora

console.log(score + 1);
console.log(typeof score); //algumas situaçoes typeof nao vai ser o melhor pra ser usado pra ver o tipo

const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)
console.log(crazyConversion, convertedNumber, typeof convertedNumber);
console.log(booleanConversion, typeof booleanConversion);

/*
  Valores falsy:
  -false
  -0
  -"",'',``
  -null
  -undefined
  -NaN

  Valores truthy:
  -Qualquer valor que não é falsy
  */