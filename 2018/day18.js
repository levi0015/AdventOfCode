console.log("Day 18");

const day18Arr = `.#.#...|#.
.....#|##|
.|..|...#.
..|#.....#
#.#|||#|#|
...#.||...
.|....|...
||...#|.#|
|.||||..|.
...#.|..|.`;

function day18(input) {
    input = input.split('\n').map(str => str.split(''));

    console.log(input)

    for (let h = 0; h < 1; h++) {
        // let newInput = [];
        for (let i = 0; i < input.length; i++) {
            // let row = [];
            for (let j = 0; j < input[i].length; j++) {
                if (i == 0 && j == 0) {
                    // console.log("top left");
                    // checkLand([array of coors to check], input)
                } else if (i == 0 && j == input[i].length - 1) {
                    // console.log("top right");
                } else if (i == input.length - 1 && j == 0) {
                    // console.log("bottom left");
                } else if (i == input.length - 1 && j == input[i].length - 1) {
                    // console.log("bottom right");
                } else if (i == 0 && j > 0 && j < input[i].length - 1) {
                    // console.log("top");
                } else if (i > 0 && i < input.length - 1 && j == 0) {
                    // console.log("left");
                } else if (i > 0 && i < input.length - 1 && j == input[i].length - 1) {
                    // console.log("right");
                } else if (i == input.length - 1 && j > 0 && j < input[i].length - 1) {
                    // console.log("bottom");
                } else {
                    // console.log("rest");
                }
            }
            // newInput.push(row);
        }
        // input = newInput;
    }
}

console.log(`Part one's answer is: ${day18(day18Arr)}`);
// console.log(`Part two's answer is: ${day18()}`);