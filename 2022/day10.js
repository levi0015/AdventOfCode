console.log("%cDay 10", 'color: #00ff44');

// const day10Arr = `addx 15
// addx -11
// addx 6
// addx -3
// addx 5
// addx -1
// addx -8
// addx 13
// addx 4
// noop
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx -35
// addx 1
// addx 24
// addx -19
// addx 1
// addx 16
// addx -11
// noop
// noop
// addx 21
// addx -15
// noop
// noop
// addx -3
// addx 9
// addx 1
// addx -3
// addx 8
// addx 1
// addx 5
// noop
// noop
// noop
// noop
// noop
// addx -36
// noop
// addx 1
// addx 7
// noop
// noop
// noop
// addx 2
// addx 6
// noop
// noop
// noop
// noop
// noop
// addx 1
// noop
// noop
// addx 7
// addx 1
// noop
// addx -13
// addx 13
// addx 7
// noop
// addx 1
// addx -33
// noop
// noop
// noop
// addx 2
// noop
// noop
// noop
// addx 8
// noop
// addx -1
// addx 2
// addx 1
// noop
// addx 17
// addx -9
// addx 1
// addx 1
// addx -3
// addx 11
// noop
// noop
// addx 1
// noop
// addx 1
// noop
// noop
// addx -13
// addx -19
// addx 1
// addx 3
// addx 26
// addx -30
// addx 12
// addx -1
// addx 3
// addx 1
// noop
// noop
// noop
// addx -9
// addx 18
// addx 1
// addx 2
// noop
// noop
// addx 9
// noop
// noop
// noop
// addx -1
// addx 2
// addx -37
// addx 1
// addx 3
// noop
// addx 15
// addx -21
// addx 22
// addx -6
// addx 1
// noop
// addx 2
// addx 1
// noop
// addx -10
// noop
// noop
// addx 20
// addx 1
// addx 2
// addx 2
// addx -6
// addx -11
// noop
// noop
// noop`;

const day10Arr = `noop
addx 22
addx -17
addx 1
addx 4
addx 17
addx -16
addx 4
addx 1
addx 21
addx -17
addx -10
noop
addx 17
addx -1
addx 5
addx -1
noop
addx 4
addx 1
noop
addx -37
addx 5
addx 27
addx -22
addx -2
addx 2
addx 5
addx 2
addx 5
noop
noop
addx -2
addx 5
addx 16
addx -11
addx -2
addx 2
addx 5
addx 2
addx -8
addx 9
addx -38
addx 5
addx 20
addx -16
addx 8
addx -5
addx 1
addx 4
noop
noop
addx 5
addx -2
noop
noop
addx 18
noop
addx -8
addx 2
addx 7
addx -2
noop
noop
noop
noop
noop
addx -35
noop
addx 32
addx -26
addx 12
addx -8
addx 3
noop
addx 2
addx 16
addx -24
addx 11
addx 3
addx -17
addx 17
addx 5
addx 2
addx -15
addx 22
addx 3
noop
addx -40
noop
addx 2
noop
addx 3
addx 13
addx -6
addx 10
addx -9
addx 2
addx 22
addx -15
addx 8
addx -7
addx 2
addx 5
addx 2
addx -32
addx 33
addx 2
addx 5
addx -39
addx -1
addx 3
addx 4
addx 1
addx 4
addx 21
addx -20
addx 2
addx 12
addx -4
noop
noop
noop
noop
noop
addx 4
noop
noop
noop
addx 6
addx -27
addx 31
noop
noop
noop
noop
noop`;

function day10(input) {
    input = input.split('\n').map(x => x.split(' ').map(y => (!isNaN(y)) ? Number(y) : y));

    let x = 1;
    let cycles = 0;
    const checkCycles = [20, 60, 100, 140, 180, 220];

    let grid = [];
    let sum = [];
    let row = ``;

    for (let i = 0; i < input.length; i++) {
        const [key, value] = [input[i][0], input[i][1]];

        row += ([x - 1, x, x + 1].includes(cycles % 40)) ? '#' : '.';
        if (row.length == 40) {
            grid.push(row);
            row = ``;
        }

        cycles++;

        if (checkCycles.includes(cycles)) {
            sum.push(x * cycles);
        }

        if (key == 'addx') {
            row += ([x - 1, x, x + 1].includes(cycles % 40)) ? '#' : '.';
            if (row.length == 40) {
                grid.push(row);
                row = ``;
            }

            cycles++;

            if (checkCycles.includes(cycles)) {
                sum.push(x * cycles);
            }

            x += (!isNaN(value) ? value : 0);
        }
    }

    sum = sum.reduce((a, b) => a + b, 0);

    // console.log(grid);
    return [sum, 'RZHFGJCB'];
}

// console.log(`Part one's answer is: ${day10(day10Arr)[0]}`);
// console.log(`Part two's answer is: ${day10(day10Arr)[1]}`);

console.log(`Part one's answer is: 13860`);
console.log(`Part two's answer is: RZHFGJCB`);