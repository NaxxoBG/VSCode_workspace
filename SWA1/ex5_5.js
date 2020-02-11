function pascal(n) {
    const fact = num => {
        for (var i = num, c = 1; i > 1; i--) c *= i;
        return c;
    }
    const calcNum = col => fact(n) / (fact(col) * fact(n - col));

    let ans = []
    for (let i = 0; i <= n; i++) {
        ans[i] = calcNum(i)
    }
    return ans
}

let count = 9
for (let i = 0; i <= count; i++) {
    console.log(pascal(i))
}
