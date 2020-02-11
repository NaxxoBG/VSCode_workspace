//retry

class MultiplicatorUnitFailure extends Error { }

function testMult(a, b) {
    for (; ;) {
        try {
            let res = primitiveMultiply(a, b);
            console.log(res);
            break;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                testMult(a, b);
            }
        }
    }
}

//the locked box

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(fn) {
    try {
        box.unlock();
        fn();
    } catch (error) {
        console.log("Error");
    } finally {
        box.lock();
    }
}

str = new RegExp("[a-z]{3}");
v = "^arh$";
console.log(str.test(v));

