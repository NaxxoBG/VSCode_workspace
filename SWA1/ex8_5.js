function factorial(n, result_so_far = 1) {
    if (n === 1) {
        return result_so_far
    } else {
        return factorial(n - 1, n * result_so_far)
    }
}

console.log(`With stack: ${factorial(5, 1)}`)


//---------------------------------------- setImmediate() and callback

function factorialVersionCb(n, result_so_far = 1, res) {
    if (n === 1) {
        res(result_so_far)
    } else {
        return factorialVersionCb(n - 1, n * result_so_far, res)
    }
}

const recurCb = (n, result_so_far = 1, res) => setImmediate(() => factorialVersionCb(n, result_so_far = 1, res))

recurCb(5, 1, function(e) {
    console.log(`With event loop: ${e}`)
})


//---------------------------------------- setImmediate() and a promise

const recurPr = (n, result_so_far = 1) => Promise.resolve(factorial(n, result_so_far)).then((r) => console.log(`With promise: ${r}`))
recurPr(5, 1)
