var worker = new Worker('worker.js')

let ans = document.getElementById("answer")

worker.addEventListener('message', (e) => {
    console.log(`Result of computation is ${e.data}`)
    ans.innerHTML += e.data
})

let num = prompt("Enter a number to calculate the factorial.")
worker.postMessage(num)