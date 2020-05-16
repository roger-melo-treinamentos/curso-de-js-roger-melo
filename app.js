const radius = 10
const pi = 3.14

const area = pi * radius ** 2

const crazyOperation = 5 *(10-3) ** 2
console.log(crazyOperation);

let postLikes = 10

// postLikes = postLikes +1

postLikes-- 


postLikes -= 20

console.log(postLikes);

// console.log(area);

postLikes *= 3
console.log(postLikes);

postLikes/= 2

console.log(postLikes);
console.log(7/ "oi");

const likeMessage = "o post tem " + postLikes +" "+"likes."

console.log(likeMessage);

const postTitle = "É bolacha ou biscoito?"
const postAuthor = "Daniela Jardim"
const postComments = "15"

// const postMessage = "o post " + postTitle + " da " + postAuthor + ", tem " + postComments + " posts."

// const postMessage = `o post "${postTitle}", da "${postAuthor}", tem "${postComments}" comentários"`

// console.log(postMessage);

const html = `
<h2>${postTitle}</h2>
<p${postAuthor}</p>
<span>Este post tem ${postComments} comentários </span>

`

console.log(html)

