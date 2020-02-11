var a = [1, 2, 3, 7, 19, 3, 4, -11]
console.log(a)

let [i, j, ...k] = a
console.log(i, j, k)

let newArr = [i, j, ...k] //recombining


let str = 'abcd'
let [r, t, ...g] = str
console.log(r)

// define pipe using reduction
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
let res = pipe((f1 => f1 + 1), (f2 => f2 * 10))(1);
console.log(res)