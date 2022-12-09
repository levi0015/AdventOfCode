console.log("Day 08");

const day08Arr = [
    ["rect","1x1"], ["row","y=0 by 5"], ["rect","1x1"], ["row","y=0 by 5"], ["rect","1x1"], ["row","y=0 by 3"], ["rect","1x1"], ["row","y=0 by 2"], ["rect","1x1"], ["row","y=0 by 3"], ["rect","1x1"], ["row","y=0 by 2"], ["rect","1x1"], ["row","y=0 by 5"], ["rect","1x1"], ["row","y=0 by 5"], ["rect","1x1"], ["row","y=0 by 3"], ["rect","1x1"], ["row","y=0 by 2"], ["rect","1x1"], ["row","y=0 by 3"], ["rect","2x1"], ["row","y=0 by 2"], ["rect","1x2"], ["row","y=1 by 5"], ["row","y=0 by 3"], ["rect","1x2"], ["column","x=30 by 1"], ["column","x=25 by 1"], ["column","x=10 by 1"], ["row","y=1 by 5"], ["row","y=0 by 2"], ["rect","1x2"], ["row","y=0 by 5"], ["column","x=0 by 1"], ["rect","4x1"], ["row","y=2 by 18"], ["row","y=0 by 5"], ["column","x=0 by 1"], ["rect","3x1"], ["row","y=2 by 12"], ["row","y=0 by 5"], ["column","x=0 by 1"], ["rect","4x1"], ["column","x=20 by 1"], ["row","y=2 by 5"], ["row","y=0 by 5"], ["column","x=0 by 1"], ["rect","4x1"], ["row","y=2 by 15"], ["row","y=0 by 15"], ["column","x=10 by 1"], ["column","x=5 by 1"], ["column","x=0 by 1"], ["rect","14x1"], ["column","x=37 by 1"], ["column","x=23 by 1"], ["column","x=7 by 2"], ["row","y=3 by 20"], ["row","y=0 by 5"], ["column","x=0 by 1"], ["rect","4x1"], ["row","y=3 by 5"], ["row","y=2 by 2"], ["row","y=1 by 4"], ["row","y=0 by 4"], ["rect","1x4"], ["column","x=35 by 3"], ["column","x=18 by 3"], ["column","x=13 by 3"], ["row","y=3 by 5"], ["row","y=2 by 3"], ["row","y=1 by 1"], ["row","y=0 by 1"], ["rect","1x5"], ["row","y=4 by 20"], ["row","y=3 by 10"], ["row","y=2 by 13"], ["row","y=0 by 10"], ["column","x=5 by 1"], ["column","x=3 by 3"], ["column","x=2 by 1"], ["column","x=1 by 1"], ["column","x=0 by 1"], ["rect","9x1"], ["row","y=4 by 10"], ["row","y=3 by 10"], ["row","y=1 by 10"], ["row","y=0 by 10"], ["column","x=7 by 2"], ["column","x=5 by 1"], ["column","x=2 by 1"], ["column","x=1 by 1"], ["column","x=0 by 1"], ["rect","9x1"], ["row","y=4 by 20"], ["row","y=3 by 12"], ["row","y=1 by 15"], ["row","y=0 by 10"], ["column","x=8 by 2"], ["column","x=7 by 1"], ["column","x=6 by 2"], ["column","x=5 by 1"], ["column","x=3 by 1"], ["column","x=2 by 1"], ["column","x=1 by 1"], ["column","x=0 by 1"], ["rect","9x1"], ["column","x=46 by 2"], ["column","x=43 by 2"], ["column","x=24 by 2"], ["column","x=14 by 3"], ["row","y=5 by 15"], ["row","y=4 by 10"], ["row","y=3 by 3"], ["row","y=2 by 37"], ["row","y=1 by 10"], ["row","y=0 by 5"], ["column","x=0 by 3"], ["rect","3x3"], ["row","y=5 by 15"], ["row","y=3 by 10"], ["row","y=2 by 10"], ["row","y=0 by 10"], ["column","x=7 by 3"], ["column","x=6 by 3"], ["column","x=5 by 1"], ["column","x=3 by 1"], ["column","x=2 by 1"], ["column","x=1 by 1"], ["column","x=0 by 1"], ["rect","9x1"], ["column","x=19 by 1"], ["column","x=10 by 3"], ["column","x=5 by 4"], ["row","y=5 by 5"], ["row","y=4 by 5"], ["row","y=3 by 40"], ["row","y=2 by 35"], ["row","y=1 by 15"], ["row","y=0 by 30"], ["column","x=48 by 4"], ["column","x=47 by 3"], ["column","x=46 by 3"], ["column","x=45 by 1"], ["column","x=43 by 1"], ["column","x=42 by 5"], ["column","x=41 by 5"], ["column","x=40 by 1"], ["column","x=33 by 2"], ["column","x=32 by 3"], ["column","x=31 by 2"], ["column","x=28 by 1"], ["column","x=27 by 5"], ["column","x=26 by 5"], ["column","x=25 by 1"], ["column","x=23 by 5"], ["column","x=22 by 5"], ["column","x=21 by 5"], ["column","x=18 by 5"], ["column","x=17 by 5"], ["column","x=16 by 5"], ["column","x=13 by 5"], ["column","x=12 by 5"], ["column","x=11 by 5"], ["column","x=3 by 1"], ["column","x=2 by 5"], ["column","x=1 by 5"], ["column","x=0 by 1"]
];

// const testArr = [
//     ["rect","3x2"],
//     ["column","x=1 by 1"],
//     ["row","y=0 by 4"],
//     ["column","x=1 by 1"]
// ];

let grid = [];

function makeGrid(width, height) {
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push('.');
        }
        grid.push(row);
    }
}

function day08() {
    makeGrid(50, 6);
    
    for (let i = 0; i < day08Arr.length; i++) {
        const key = day08Arr[i][0];
        let val = day08Arr[i][1];
        switch (key) {
            case "rect":
                val = val.split('x');

                for (let j = 0; j < val[1]; j++) {
                    for (let k = 0; k < val[0]; k++) {
                        grid[j][k] = "#";
                    }
                }

                break;
            case "column":
                val = val.slice(2);
                val = val.split(' by ');

                let verticalArr = [];
                for (let l = 0; l < grid.length; l++) {
                    verticalArr.push(grid[l][val[0]]);
                }

                for (let m = 0; m < val[1]; m++) {
                    verticalArr.unshift(verticalArr.pop());
                }

                for (let n = 0; n < grid.length; n++) {
                    grid[n][val[0]] = verticalArr[n];
                }

                break;
            case "row":
                val = val.slice(2);
                val = val.split(' by ');

                for (let o = 0; o < val[1]; o++) {
                    grid[val[0]].unshift(grid[val[0]].pop());
                }

                break;
            default:
                break;
        }
    }

    let answer = 0;
    for (let p = 0; p < grid.length; p++) { for (let q = 0; q < grid[p].length; q++) { if (grid[p][q] == '#') { answer++; } } }

    let letters = [];

    for (let r = 0; r < (grid[0].length / 5); r++) {
        let letter = [];
        for (let s = 0; s < grid.length; s++) {
            letter.push(grid[s].slice(r * 5, ((r * 5) + 5)));
        }
        letters.push(letter);
    }

    // console.log(...letters)

    return [answer, "CFLELOYFCS"];
}

console.log(`Part one's answer is: ${day08()[0]}`);
console.log(`Part two's answer is: ${day08()[1]}`);