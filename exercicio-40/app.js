/*
  01

  Implemente abaixo uma forma de digitar menos ao exibir 
  valores no console no decorrer dessa bateria de exercícios.
*/



/*
  02

  - Descomente a invocação da função removeProp e implemente-a;
  - O output dela deve ser um array de novos objetos que não 
    contém a propriedade b, como demonstrado no comentário 
    multi-linha abaixo.
*/

const objs = [
  { a: 213, b: 965, c: 522 },
  { c: 2333, a: 1321, b: 545 },
  { b: 993, c: 345, a: 781 }
]

const propToRemove = 'b'



// removeProp(propToRemove, objs)

/*
[
  {
    a: 213,
    c: 522
  },
  {
    c: 2333,
    a: 1321
  },
  {
    c: 345,
    a: 781
  }
]
*/

/*
  03

  - Descomente a invocação da função getStatusCount e implemente-a;
  - O output dela deve ser um objeto que contém as quantidades de 
    ocorrências dos status, como demonstrado no comentário 
    multi-linha abaixo.
*/

const orders = [
  { username: 'f_gazi', status: 'pending', price: 63.97 },
  { username: 'heitordp', status: 'cancelled', price: 79 },
  { username: 'a_campos', status: 'shipped', price: 97.63 },
  { username: 'rafaq', status: 'pending', price: 67 },
  { username: '_rick', status: 'shipped', price: 73.65 }
]



// getStatusCount(orders)

/*
{
  pending: 2,
  cancelled: 1,
  shipped: 2
}
*/

/*
  04

  - No código da última aula, faça com que a data na <li> que 
    mostra o momento da adição do game no banco de dados 
    tenha o formato abaixo. O conteúdo da <li> deve ficar 
    assim:
    
    "Adicionado no banco em 23/06/2021 23:57"
  
  Dica: pesquise por Intl.DateTimeFormat() constructor.
*/



/*
  05

  - Refatore o código da última aula.

  Algumas dicas do que você pode implementar:
    - Funções de responsabilidade única;
    - Usar async/await no lugar de promises;
    - Remover a mutação de valores dentro do reduce.
*/
