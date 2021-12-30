// if
const age = 19
if (age > 18) {
  console.log('voce tem mais de 18 anos');
}

console.log('************************************');

const simpsons = ['Marge', 'Homer', "Lisa", 'Bart']
if (simpsons.length >= 3) {
  console.log('o array tem bastante personagens');
}
console.log('**********************');

const password = 'oi123'
if (password.length >= 12 && password.includes('1')) {
  console.log('senha muito forte =)');
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
  console.log('essa senha tem 8 ou mais caracteres');s
} else {
  console.log('a senha deve conter 8 ou mais caracteres');
}