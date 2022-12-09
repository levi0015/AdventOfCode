console.log("Day 18");

const day18Str = ".^..^....^....^^.^^.^.^^.^.....^.^..^...^^^^^^.^^^^.^.^^^^^^^.^^^^^..^.^^^.^^..^.^^.^....^.^...^^.^.";

function day18(rows) {
    let grid = [];
    let safeTiles = 0;
    grid.push(day18Str);

    for (let h = 0; h < day18Str.length; h++) {
        if (day18Str[h] == ".") {
            safeTiles++;
        }
    }

    while (grid.length < rows) {
        let newRow = "";
        for (let i = 0; i < grid[grid.length - 1].length; i++) {
            const left = grid[grid.length - 1][i - 1] || ".";
            const center = grid[grid.length - 1][i];
            const right = grid[grid.length - 1][i + 1] || ".";

            if ((left == "^" && center == "^" && right == ".") ||
                (left == "." && center == "^" && right == "^") ||
                (left == "^" && center == "." && right == ".") ||
                (left == "." && center == "." && right == "^")) {
                newRow += "^";
            } else {
                newRow += ".";
                safeTiles++;
            }
        }
        grid.push(newRow);
    }

    return safeTiles;
}

console.log(`Part one's answer is: ${day18(40)}`);
// console.log(`Part two's answer is: ${day18(400000)}`);
console.log(`Part two's answer is: 20000577`);