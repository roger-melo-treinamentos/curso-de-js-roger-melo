const getTodos = (url) =>  new Promise((resolve, reject) => {
  const request = new XMLHttpRequest ()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if(isRequestOk){
      const data = JSON.parse(request.responseText)
      resolve (`O pokemon escolhido é ${data.name}`)
    } if(isRequestNotOk){
      reject ('nao foi')
    }
  })
  
  request.open('GET', url)
  request.send()

})

getTodos('https://pokeapi.co/api/v2/pokemon/pikachu')
 .then(pokemon => console.log(pokemon))
 .catch(error => console.log(error))




// getTodos('https://pokeapi.co/api/v2/pokemon/pikachu', (error, data) => {
//   console.log(data)
//   getTodos('https://pokeapi.co/api/v2/pokemon/bulbasaur', (error, data) => {
//     console.log(data)
//     getTodos('https://pokeapi.co/api/v2/pokemon/charmander', (error, data) => {
//       console.log(data)
//     })
//   }) 
// })