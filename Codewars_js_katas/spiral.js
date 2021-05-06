
function spiral(size) {
    let spiralMatrix = Array(size).fill(0).map(() => Array(size).fill(0));

    let total = size * size
    let counter = 0;

    let down, right, up, left;

    for (let i = 0; i < total && counter !== total; i++) {

        //down
        for (down = i; down < size - i && counter != total; ++down) {
            counter += 1
            spiralMatrix[down][i] = counter;
        }
        down -= 1

        //right
        for (right = i + 1; right < size - i && counter != total; ++right) {
            counter += 1
            spiralMatrix[down][right] = counter;
        }

        //up
        for (up = down - 1, right -= 1; up >= i && counter != total; up--) {
            counter += 1
            spiralMatrix[up][right] = counter;
        }

        //left
        for (left = right - 1, up += 1; left > i && counter != total; left--) {
            counter += 1
            spiralMatrix[up][left] = counter;
        }
    }
    return spiralMatrix
}

function _2DIntMatrixToString(m) {
    // Get length of longest number in the grid, e. g. 25 => 2. Used for the padding
    let len = String(Math.pow(m.length, 2)).length

    return m.map(subArr => subArr
                .map(el => `${String(el).padStart(len + 1)}`))
                .reduce((acc, cur) => `${acc},\n${cur}`);
}

for (let g = 2; g < 9; g++) {
   console.log(`For n = ${g}:\n${_2DIntMatrixToString(spiral(g))}\n`)
}
