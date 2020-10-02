const past = new Date(' sept 23 2020 7:47:00')
const present = new Date()


const difference = present.getTime() - past.getTime()
console.log(difference);

const seconds = Math.round(difference / 1000)

console.log({seconds})

const minnutes = Math.round(seconds / 60)

console.log({minnutes})

const hours = Math.round(minnutes / 60)

console.log({hours})

const days = Math.round(hours / 24)

console.log({days})

console.log( `Escrito há ${days}`)


const timestamp = 173897598725

console.log(new Date(timestamp))

