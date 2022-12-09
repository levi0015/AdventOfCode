console.log("Day 22");

// const day22Arr = `..#
// #..
// ...`;

const day22Arr = `###.#######...#####.#..##
.####...###.##...#..#....
.#.#...####.###..##..##.#
########.#.#...##.#.##.#.
..#.#...##..#.#.##..####.
..#.#.....#....#####..#..
#.#..##...#....#.##...###
.#.##########...#......#.
.#...#..##...#...###.#...
......#.###.#..#...#.####
.#.###.##...###.###.###.#
.##..##...#.#.#####.#...#
#...#..###....#.##.......
####.....######.#.##..#..
..#...#..##.####.#####.##
#...#.#.#.#.#...##..##.#.
#####.#...#.#.#.#.##.####
....###...#.##.#.##.####.
.#....###.#####...#.....#
#.....#....#####.#..#....
.#####.#....#..##.#.#.###
####.#..#..##..#.#..#.###
.##.##.#.#.#.#.#..####.#.
#####..##.#.#..#..#...#..
#.#..#.###...##....###.##`;

function day22(input) {
    input = input.split('\n').map(str => str.split(''));

    let currCoor = [((input.length - 1) / 2), ((input.length - 1) / 2)];
    let infectedCoors = [];
    let facings = ['up', 'right', 'down', 'left'];
    let infCounter = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == '#') {
                infectedCoors.push([i, j]);
            }
        }
    }

    for (let k = 0; k < 10000; k++) {
        let newCoors = [];
        let state;
        let infInd = checkNode(infectedCoors, currCoor);
        // check node
        if (infInd >= 0) {
            state = 'infected';
        } else {
            state = 'clean';
        }

        // change direction
        if (state == 'infected') {
            // right
            facings.push(facings.shift());

            infectedCoors.splice(infInd, 1)
            // console.log([...infectedCoors])
        } else {
            // left
            facings.unshift(facings.pop());
            
            infectedCoors.push(currCoor);
            infCounter++;
            // console.log([...infectedCoors])
        }

        // move forward
        switch (facings[0]) {
            case 'up':
                newCoors = [currCoor[0] - 1, currCoor[1]];
                break;
            case 'down':
                newCoors = [currCoor[0] + 1, currCoor[1]];
                break;
            case 'right':
                newCoors = [currCoor[0], currCoor[1] + 1];
                break;
            case 'left':
                newCoors = [currCoor[0], currCoor[1] - 1];
                break;
            default:
                break;
        }

        currCoor = newCoors;
    }

    return infCounter;
}

function day22Two(input) {
    console.time();
    input = input.split('\n').map(str => str.split(''));

    let currCoor = [((input.length - 1) / 2), ((input.length - 1) / 2)];
    let specialCoors = [
        [], // infected
        [], // weakened
        []  // flagged
    ];
    let facings = ['up', 'right', 'down', 'left'];
    let infCounter = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == '#') {
                specialCoors[0].push([i, j]);
            }
        }
    }

    for (let k = 0; k < 10000; k++) {
        let newCoors = [];
        let state;
        let infInd = checkNode(specialCoors[0], currCoor);
        let weakInd = checkNode(specialCoors[1], currCoor);
        let flagInd = checkNode(specialCoors[2], currCoor);

        // check node
        if (infInd >= 0) {
            state = 'infected';
        } else if (weakInd >= 0) {
            state = 'weakened';
        } else if (flagInd >= 0) {
            state = 'flagged';
        } else {
            state = 'clean';
        }

        // change direction
        if (state == 'infected') {
            // right
            facings.push(facings.shift());

            specialCoors[2].push(specialCoors[0][infInd]);
            specialCoors[0].splice(infInd, 1);
            // console.log([...specialCoors]);
        } else if (state == 'weakened') {
            // no turn

            specialCoors[0].push(specialCoors[1][weakInd]);
            specialCoors[1].splice(weakInd, 1);
            infCounter++;
            // console.log([...specialCoors]);
        } else if (state == 'flagged') {
            // turn around
            facings.push(facings.shift());
            facings.push(facings.shift());

            specialCoors[2].splice(flagInd, 1);
            // console.log([...specialCoors]);
        } else {
            // left
            facings.unshift(facings.pop());
            
            specialCoors[1].push(currCoor);
            // console.log([...specialCoors]);
        }

        // move forward
        switch (facings[0]) {
            case 'up':
                newCoors = [currCoor[0] - 1, currCoor[1]];
                break;
            case 'down':
                newCoors = [currCoor[0] + 1, currCoor[1]];
                break;
            case 'right':
                newCoors = [currCoor[0], currCoor[1] + 1];
                break;
            case 'left':
                newCoors = [currCoor[0], currCoor[1] - 1];
                break;
            default:
                break;
        }

        currCoor = newCoors;
    }

    console.timeEnd();
    return infCounter;
}

function checkNode(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (arraysEqual(a[i], b)) {
            return i;
        }
    }
    return -1;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(`Part one's answer is: ${day22(day22Arr)}`);
// console.log(`Part two's answer is: ${day22Two(day22Arr)}`);