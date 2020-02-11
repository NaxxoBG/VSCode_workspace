//a
function factorial(n) {
	return [...Array(n).keys()].map(f => f + 1).reduce((t, e) => t *= e)
}

console.log(factorial(5));

//b
function power(m, n) {
	return Math.pow(m, n);
}
console.log(power(3, 4));