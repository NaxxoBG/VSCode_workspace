pr = e => console.log(e)

I = e => e
W = f => e => f(e)(e)

TRUE = a => _ => a
FALSE = _ => b => b

AND = a => b => a(b)(FALSE)
OR = a => b => a(TRUE)(b)
NOT = a => a(FALSE)(TRUE)
pr(I(I))

pr("--------AND------------")
pr(AND(TRUE)(TRUE))
pr(AND(TRUE)(FALSE))
pr(AND(FALSE)(TRUE))
pr(AND(FALSE)(FALSE))
pr("--------OR------------")
pr(OR(TRUE)(TRUE))
pr(OR(TRUE)(FALSE))
pr(OR(FALSE)(TRUE))
pr(OR(FALSE)(FALSE))

pr("--------NOT------------")
pr(NOT(TRUE))
pr(NOT(FALSE))
pr(NOT(OR(FALSE)(FALSE)))
pr(W(a => b => a + 10 + b)(2))

class Tree {
    constructor(v, l, r) {
        this.v = v;
        this.l = l;
        this.r = r;
    }
}

/* A cps-styled function for folding a tree.*/
function fold2(tree, seed, f, cont) {
    if (tree === null) {
        return cont(seed)
    } else {
        const {
            v: value,
            l: left,
            r: right
        } = tree
        return fold2(left, seed, f, l => fold2(right, seed, f, r => cont(f(value, l, r))))
    }
}

const tr = new Tree(1, new Tree(3, null, null), new Tree(3, null, null))
pr(fold2(tr, 0, (x, y, z) => x + y + z, e => e))

function tester(x, y, f, z) {
    return z(f(x, y))
}

pr(tester(12.5, 12, Math.max, r => Math.round(r)))

// A linked list with traversal and reversal functions
class LNode {
    constructor(adr, next) {
        this.adr = adr
        this.next = next
    }

    set nextNode(nxt) {
        this.next = nxt
    }

    get nextNode() {
        return this.next
    }

    get address() {
        return this.adr
    }

    set address(value) {
        this.adr = value
    }

    reverse() {
        var head = new LNode(this.address, this.nextNode)
        var current = head
        var next, prev = null
        while (current != null) {
            next = current.nextNode
            current.nextNode = prev
            prev = current
            current = next
        }
        head = prev
        return head
    }

    traverse() {
        console.log("-------------------------------------")
        let temp = this;
        while (temp != null) {
            console.log(temp.address);
            temp = temp.nextNode
        }
    }
}

var lList = new LNode(10, new LNode(20, new LNode(30, new LNode(40, null))))
lList.traverse()
lList = lList.reverse()
lList.traverse()


// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn 't an odd number and you don't need to move it.If you have an empty array, you need to return it.
function sortArray(array) {
    let sortedOddNums = array.filter(e => e % 2 != 0).sort((a, b) => a - b)
    return array.map(e => e % 2 == 0 ? e : sortedOddNums.shift())
}

let testVar = [4, 6, 5, 1, 3, 2, 45];
console.log(sortArray(testVar));

// Coding Kata with divisors (rems)
function thirt(number) {
    let rems = [1, 10, 9, 12, 3, 4]
    let lastRes, curRes = 0
    do {
        let num = number.toString().split("").map(Number).reverse()
        lastRes = curRes
        curRes = 0
        for (let i = 0; i < num.length; i++) {
            curRes += num[i] * rems[i % rems.length]
        }
        number = curRes
    } while (curRes != lastRes);
    return curRes
}

console.log("-------------------")
console.log(thirt(321));
console.log(thirt(1234567))