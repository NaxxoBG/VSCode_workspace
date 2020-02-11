//a
function raise(n) { 
    return (f) => {
      return Math.pow(f, n)
    }
}

const raiseBy2 = raise(2)
console.log(raiseBy2(5))

//b

function fib() {
    var f1 = 0;
    var f2 = 1;
    return () => {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        return f2;
    };
}

const nextFib = fib()
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log("Creating a new closure")
const anotherFib = fib() // anotherFib is a closure
console.log(anotherFib());
console.log(anotherFib());
console.log(anotherFib());
console.log(anotherFib());
console.log("End of new closure calls")
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())
console.log(nextFib())