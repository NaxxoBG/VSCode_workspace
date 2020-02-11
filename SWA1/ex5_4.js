const myReduce = (array, operator, defaultValue) => {
    if (array.length > 0) {
        for (let i = 1; i < array.length; i++) {
            if (defaultValue instanceof Array) {
                if (operator(array[i])) {
                    defaultValue = defaultValue.concat(operator(array[i]))
                }
            } else {
                defaultValue = operator(defaultValue, array[i])
            }
        }
    }

    if (defaultValue instanceof Array) {
        if (operator(array[0])) {
            defaultValue.unshift(operator(array[0]))
        }
        return defaultValue
    } else {
        return operator(defaultValue, array[0])
    }
}

const myMap = (arr, f) => {
    return myReduce(arr, f, defaultValue = [])
}

const myFilter = (array, f) => {
    let filtArr = myReduce(array, f, defaultValue = [])
    let resArr = []
    for (let i = 0; i < array.length; i++) {
        if (filtArr[i]) {
            resArr = resArr.concat(array[i])
        }
    }
    return resArr
}

let ar = [1, 2, 3, 4, 5]

console.log(myReduce(ar, ((t, s) => t += s), 0))
console.log(myMap(ar, (s => s * 10)))
console.log(myFilter(ar, (t => t % 2 === 0)))