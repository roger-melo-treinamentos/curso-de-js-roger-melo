// operador lógico not (!)
let isUserLoggedIn = false;

if (!isUserLoggedIn) { // ! troca do output
  console.log('você precisa fazer login para continuar');
}
console.log(!true); // not true
console.log(!false); // not false

// break e continue
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue
  }

  console.log(`sua pontuação: ${scores[i]}`);

  if (scores[i] === 100) {
    console.log('patabéns você atingiu a pontuacão máxima');
    break
  }
}

// switch statement
const grade = 'B'

switch (grade) {
  case 'A':
    console.log('voce tirou um A');
    break
  case 'B':
    console.log('voce tirou um B');
    break
  case 'C':
    console.log('voce tirou um C');
    break
  case 'D':
    console.log('voce tirou um D');
    break
  case 'E':
    console.log('voce tirou um E');
    break
  default:
    console.log('nota inválida');
}
// usando if statements
if (grade === 'A') {

} else if (grade === 'B') {
  
} else if (grade === 'C') {

}else if (grade === 'D') {

} else if (grade === 'E') {

} else {

}