self.addEventListener('message', (e) => {
    var res = factorial(e.data)
    self.postMessage(res)
    self.close()
})

function factorial(n, result_so_far = 1) {
    if (n === 1)
        return result_so_far
    else
        return factorial(n - 1, n * result_so_far)
}