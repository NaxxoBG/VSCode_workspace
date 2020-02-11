function add(n, m) {
    return n + m
}

const currAdd = n => m => n + m

console.log(add(1, 2))
console.log(currAdd(1)(2))

function greater(n, m) {
    return n > m
}

const currGreater = n => m => n > m

console.log(greater(1, 2))
console.log(currGreater(1)(2))

let person = {
    name: 'foo'
}

function get(attr, o) {
    return o[attr]
}

const currGet = attr => o => o[attr]

console.log(get('name', person))
console.log(currGet('name')(person))


function pipe(f, g) {
    return function (x) {
        let r = f(x)
        return g(r)
    }
}

const currPipe = f => g => x => g(f(x))

console.log(pipe((x => x + 1), (s => s * 5))(1))
console.log(currPipe(x => x + 1)(s => s * 5)(1))