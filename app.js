const getTodos = callback => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4;
    
    if(isRequestOk){
      const data = JSON.parse(request.responseText)
      callback (null, data)
      return
    }
  
    if(isRequestNotOk){
      callback ('nao foi possivel', null)
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  console.log('callback executado')

  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})


