const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ["youtube", "facebook", "twitter", "instagram"]

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
	HTMLTemplate += `<li>${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate