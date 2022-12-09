console.log("Day 11");

const day11Arr = `11111
19991
19191
19991
11111`;

function day11(input) {
    input = input.split('\n').map(x => x.split('').map(y => (Number(y))));

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            input[i][j]++;
            
            if (i == 0 && j == 0) {
                //
            } else if (i == 0 && j == input[i].length - 1) {
                //
            } else if (i == input.length - 1 && j == 0) {
                //
            } else if (i == input.length - 1 && j == input[i].length - 1) {
                //
            } else if (i == 0) {
                //
            } else if (i == input.length - 1) {
                //
            } else if (j == 0) {
                //
            } else if (j == input[i].length - 1) {
                //
            } else {
                //
            }
        }
    }

    // console.log(input)
}

console.log(`Part one's answer is: ${day11(day11Arr)}`);
// console.log(`Part two's answer is: ${day11()}`);