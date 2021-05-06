let sampleBoard =
    [[2, 0, 2],
    [2, 1, 1],
    [1, 2, 1]]

function isSolved(board) {
    let getColumn = n => board.map(m => m[n])

    let checker = x => {
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            let column = getColumn(i)
            if (row.every(t => t == x) || column.every(t => t == x)) {
                return true
            }
        }

        if (board[0][0] == x && board[1][1] == x && board[2][2] == x ||
            (board[0][2] == x && board[1][1] == x && board[2][0] == x)) {
            return true
        }
        return false;
    }

    if (checker(1)) {
        return 1;
    } else if (checker(2)) {
        return 2
    } else if ([].concat.apply([], board).some(r => r == 0)) {
        return -1
    } else {
        return 0
    }
}

console.log(isSolved(
    [[2, 0, 2],
    [2, 1, 1],
    [1, 2, 1]]) === -1);


function domainName(url) {
    let mArr = url.match(/((?<=https?:\/\/(?!www\.))[^\.]+|(?<=www\.)[^\.]+|(?<!.)(?!https?:\/\/)(?!www)(?=.)([^\.]+))/g)
    return mArr !== null ? mArr[0] : null
}


console.log("Is it true? " + domainName(("http://google.com")))