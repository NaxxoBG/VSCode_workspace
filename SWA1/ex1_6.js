function advancedFunc(m, n) {
	return Math.pow(m, n) || [...Array(m).keys()].map(f => f + 1).reduce((t, e) => t *= e)
}

console.log("advancedFunc(3, 2): " + advancedFunc(3, 2));
console.log("advancedFunc(2): " + advancedFunc(2));
console.log("advancedFunc(5,undefined): " + advancedFunc(5,undefined));

// Book exercise on creating a function that simulates a loop
function loop(val, test, update, body) {
	for (let i = 0; test(val); val = update(val)) {
        body(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1