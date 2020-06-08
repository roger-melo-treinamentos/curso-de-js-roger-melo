const double = function(number){
	const doubleResult = number * 2
	return doubleResult
}

const result = double(3)

const showResult = function( value){
	return `O resultado é: ${value}`
}

console.log(showResult(result))