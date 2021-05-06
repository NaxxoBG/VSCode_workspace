function order(words) {
    let indices  = words.match(/\d+/g) ? words.match(/\d+/g).map(i => --i) : null
    return indices == null ? "" : `${[...words.split(" ")].reduce((a, _, ind, arr) => ind == 0 ? `${arr[indices.indexOf(0)]}${a}` : `${a} ${arr[indices.indexOf(ind)]}`, "")}`
}

let testString = "is2 Thi1s T4est 3a"
let testString2 = "4of Fo1r pe6ople g3ood th5e the2"

//console.log(order(testString));
console.log(order(testString));
console.log(order(testString2));

/*
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */
