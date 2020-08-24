const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
  .filter(({price}) => price > 20)
  .map (({name, price}) => 
    `o preço caiu para "${name}" caiu para "${price}"` )

debugger