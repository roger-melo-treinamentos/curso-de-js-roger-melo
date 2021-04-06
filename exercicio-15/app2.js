// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   console.log('Clicou no botão!')
// })

//  const lis = document.querySelectorAll('li')

//  lis.forEach(li => {
//    li.addEventListener('click', event => {
//       const clickedElement = event.target
      
//       clickedElement.remove()
//    }) 
//  })

 const ul = document.querySelector('ul')

 const button = document.querySelector('button')

 button.addEventListener('click', () => {
   const li = document.createElement('li')

   li.textContent = 'Novo Item'
   ul.prepend(li)
 })

//  const lis = document.querySelectorAll('li')

//  lis.forEach(li => {
//    li.addEventListener('click', event => {
//      const clickedElement = event.target
//     console.log('Clicou na LI')

//     event.stopPropagation()

//      clickedElement.remove()
//    })
//  })

 ul.addEventListener('click', event => {
   const clickedElement = event.target

   if(clickedElement.tagName === 'LI') {
     clickedElement.remove()
   }
 })