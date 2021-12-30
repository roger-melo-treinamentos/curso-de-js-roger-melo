// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Dentro do loop: ${i}`);
}
console.log(`Loop concluido`);

console.log('************************************************');

const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate);
} // interação que cada vez esse loop foi true

// não existe pergunta idiota a pergunta idiota é aquela que fica dentro de vc e vc nao pergunta

console.log('********************************************************');

// while loop
let i = 0
while (i < 5) {
  console.log(`Dentro do loop: ${i}`);
  i++
}

const names = ['Jobs','Hopper', 'Turing']
let i = 0
while (i < names.length) {
console.log(names[i]);
i++
}