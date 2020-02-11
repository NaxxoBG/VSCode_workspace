function fib() {
    var f1 = 0;
    var f2 = 1;
    return () => {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        return f2;
    }
};

const nextFib = fib()
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log("Another func extraction")
const nextFib2 = fib()
console.log(nextFib2())
console.log(nextFib2())
console.log(nextFib2())

//Mockingbird

const mockingbird = fn => (...args) => fn(fn, ...args);

const exponent = mockingbird(
    (myself, x, n) => {
        if (n === 0) {
            return 1;
        } else if (n % 2 === 1) {
            return x * myself(myself, x * x, Math.floor(n / 2));
        } else {
            return myself(myself, x * x, n / 2)
        }
    });

console.log(exponent(3, 3))


// prototype -> Object
//__proto__ -> function
function doSomething() {}
doSomething.__proto__.foo = "bar";
doSomething.prototype.foo = "foobar"
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

// Sum all numbers from x to y, assuming x is less than y
let adder = (x, y) => {
    let sum = 0
    while (x <= y) {
        sum += x
        x++
    }
    return sum
}

console.log(`Sum is ${adder(1, 5)}`)

// Count down from 700 to 200 in decrements of 13
//for (let i = 700; i > 200; console.log(i), i -= 13);

// Find all odd numbers between x and y, assuming y is greater than x
let oddExtract = (x, y) => {
    return [...Array(y - x + 1).fill(x).map((x, y) => x + y)].filter(n => n % 2 != 0)
}

let testArr = oddExtract(4, 30)
//console.log(testArr)

// -----------------Factorial with continuations---------------------
const I = e => e
const fact = (val, cont) => {
    if (val === 0) {
        return cont(1)
    } else {
        return fact(val - 1, v => cont(v * val))
    }
}

console.log(fact(5, I))
// ------------------------------------------------------------------

function SeriesSum(n) {
    for (var i = 1, j = 1; j < n; i += 1 / (3 * j + 1), j++);
    return n != 0 ? `${Number(i).toFixed(2)}` : '0.00'
}

console.log(SeriesSum(5));

