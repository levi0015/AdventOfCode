console.log("Day 05");

const day05Arr = `move 6 from 9 to 3
move 2 from 2 to 1
move 1 from 8 to 2
move 3 from 7 to 2
move 7 from 6 to 9
move 1 from 9 to 5
move 3 from 5 to 7
move 6 from 8 to 6
move 1 from 7 to 8
move 6 from 6 to 5
move 4 from 5 to 8
move 9 from 2 to 9
move 1 from 2 to 3
move 3 from 1 to 3
move 3 from 5 to 1
move 10 from 3 to 5
move 4 from 4 to 6
move 2 from 7 to 6
move 2 from 6 to 9
move 6 from 8 to 6
move 1 from 4 to 3
move 1 from 4 to 5
move 1 from 4 to 1
move 2 from 3 to 1
move 1 from 3 to 7
move 8 from 1 to 9
move 1 from 1 to 2
move 1 from 2 to 7
move 6 from 6 to 3
move 7 from 3 to 5
move 14 from 5 to 6
move 2 from 1 to 3
move 5 from 5 to 8
move 5 from 8 to 1
move 2 from 7 to 1
move 5 from 6 to 9
move 8 from 9 to 3
move 13 from 9 to 3
move 7 from 1 to 4
move 6 from 4 to 1
move 22 from 3 to 1
move 1 from 9 to 3
move 2 from 6 to 1
move 1 from 3 to 4
move 7 from 9 to 8
move 2 from 1 to 7
move 2 from 3 to 2
move 2 from 6 to 9
move 2 from 7 to 8
move 1 from 3 to 6
move 9 from 8 to 6
move 1 from 2 to 4
move 8 from 1 to 2
move 1 from 9 to 4
move 3 from 4 to 1
move 1 from 4 to 6
move 10 from 6 to 5
move 5 from 2 to 9
move 6 from 9 to 3
move 2 from 5 to 3
move 2 from 9 to 7
move 7 from 5 to 8
move 5 from 6 to 2
move 3 from 3 to 7
move 3 from 3 to 5
move 4 from 5 to 8
move 1 from 3 to 5
move 6 from 6 to 8
move 1 from 5 to 7
move 9 from 8 to 9
move 1 from 3 to 1
move 7 from 2 to 7
move 9 from 7 to 6
move 2 from 2 to 3
move 7 from 9 to 3
move 9 from 6 to 8
move 7 from 3 to 4
move 2 from 7 to 6
move 4 from 4 to 5
move 3 from 5 to 6
move 2 from 7 to 4
move 5 from 4 to 7
move 13 from 8 to 4
move 2 from 9 to 4
move 2 from 8 to 7
move 6 from 7 to 5
move 6 from 4 to 2
move 1 from 7 to 5
move 3 from 2 to 7
move 1 from 7 to 8
move 3 from 2 to 4
move 2 from 3 to 9
move 2 from 7 to 2
move 6 from 5 to 4
move 3 from 6 to 2
move 2 from 6 to 9
move 5 from 2 to 9
move 12 from 4 to 8
move 3 from 9 to 2
move 12 from 1 to 5
move 4 from 4 to 6
move 12 from 8 to 9
move 2 from 6 to 5
move 1 from 4 to 8
move 1 from 4 to 1
move 3 from 2 to 1
move 2 from 6 to 7
move 1 from 5 to 9
move 2 from 1 to 4
move 10 from 5 to 1
move 2 from 7 to 3
move 18 from 9 to 7
move 8 from 7 to 2
move 1 from 9 to 6
move 1 from 6 to 7
move 10 from 7 to 9
move 1 from 4 to 2
move 19 from 1 to 5
move 8 from 5 to 9
move 3 from 8 to 4
move 2 from 5 to 2
move 2 from 3 to 6
move 10 from 5 to 2
move 4 from 1 to 2
move 2 from 9 to 2
move 1 from 1 to 6
move 2 from 5 to 6
move 1 from 8 to 7
move 1 from 5 to 8
move 1 from 5 to 6
move 18 from 2 to 5
move 5 from 2 to 1
move 6 from 5 to 8
move 1 from 8 to 9
move 2 from 2 to 4
move 1 from 2 to 6
move 2 from 7 to 6
move 1 from 4 to 1
move 4 from 8 to 5
move 1 from 2 to 9
move 2 from 8 to 3
move 1 from 3 to 6
move 1 from 4 to 8
move 1 from 8 to 9
move 10 from 5 to 7
move 5 from 5 to 1
move 2 from 4 to 1
move 3 from 7 to 6
move 12 from 1 to 4
move 8 from 9 to 5
move 6 from 7 to 4
move 1 from 7 to 9
move 4 from 4 to 3
move 1 from 1 to 7
move 3 from 9 to 5
move 2 from 3 to 1
move 1 from 7 to 6
move 8 from 4 to 7
move 1 from 7 to 6
move 7 from 6 to 4
move 2 from 1 to 3
move 1 from 7 to 1
move 1 from 3 to 7
move 1 from 1 to 6
move 4 from 9 to 3
move 5 from 4 to 6
move 12 from 6 to 2
move 3 from 9 to 4
move 8 from 2 to 6
move 2 from 9 to 6
move 8 from 5 to 6
move 4 from 5 to 8
move 14 from 6 to 3
move 11 from 4 to 9
move 2 from 2 to 7
move 8 from 3 to 9
move 11 from 3 to 6
move 14 from 9 to 1
move 7 from 1 to 3
move 2 from 9 to 5
move 2 from 2 to 8
move 6 from 7 to 5
move 1 from 9 to 8
move 13 from 6 to 3
move 4 from 6 to 8
move 3 from 1 to 6
move 5 from 5 to 8
move 7 from 8 to 7
move 2 from 1 to 8
move 1 from 4 to 1
move 4 from 8 to 9
move 8 from 7 to 5
move 1 from 8 to 1
move 4 from 9 to 3
move 1 from 4 to 5
move 5 from 5 to 2
move 1 from 8 to 9
move 1 from 8 to 6
move 2 from 6 to 2
move 4 from 8 to 6
move 4 from 1 to 8
move 4 from 8 to 5
move 1 from 9 to 8
move 1 from 2 to 3
move 4 from 6 to 1
move 1 from 8 to 2
move 3 from 5 to 4
move 4 from 2 to 5
move 1 from 7 to 9
move 1 from 2 to 6
move 3 from 1 to 8
move 2 from 4 to 5
move 2 from 6 to 1
move 3 from 8 to 9
move 4 from 9 to 2
move 1 from 7 to 1
move 1 from 6 to 7
move 4 from 1 to 6
move 1 from 7 to 4
move 6 from 2 to 8
move 2 from 4 to 8
move 1 from 9 to 5
move 3 from 6 to 2
move 1 from 6 to 4
move 7 from 3 to 5
move 2 from 8 to 1
move 3 from 2 to 8
move 6 from 8 to 5
move 17 from 5 to 3
move 2 from 1 to 6
move 3 from 8 to 3
move 1 from 9 to 5
move 11 from 5 to 2
move 40 from 3 to 5
move 11 from 2 to 7
move 4 from 7 to 8
move 1 from 8 to 9
move 1 from 3 to 5
move 1 from 4 to 8
move 19 from 5 to 8
move 7 from 7 to 8
move 16 from 5 to 2
move 6 from 5 to 8
move 1 from 5 to 8
move 1 from 9 to 4
move 1 from 6 to 1
move 1 from 4 to 7
move 1 from 6 to 9
move 1 from 1 to 7
move 1 from 7 to 3
move 1 from 7 to 2
move 1 from 9 to 8
move 1 from 3 to 4
move 1 from 4 to 6
move 14 from 2 to 9
move 24 from 8 to 4
move 8 from 8 to 3
move 1 from 6 to 3
move 16 from 4 to 1
move 3 from 8 to 4
move 3 from 3 to 8
move 4 from 3 to 4
move 1 from 3 to 9
move 13 from 9 to 4
move 16 from 1 to 8
move 8 from 8 to 1
move 3 from 1 to 7
move 1 from 8 to 6
move 1 from 3 to 8
move 10 from 8 to 5
move 5 from 5 to 2
move 3 from 8 to 9
move 1 from 8 to 9
move 1 from 4 to 5
move 5 from 2 to 6
move 3 from 5 to 2
move 1 from 6 to 1
move 5 from 1 to 5
move 1 from 1 to 5
move 2 from 7 to 3
move 2 from 3 to 2
move 1 from 5 to 7
move 7 from 5 to 3
move 5 from 9 to 5
move 2 from 7 to 9
move 4 from 5 to 6
move 2 from 9 to 8
move 2 from 2 to 4
move 5 from 3 to 5
move 1 from 3 to 2
move 7 from 4 to 9
move 1 from 8 to 1
move 1 from 2 to 1
move 9 from 4 to 6
move 2 from 1 to 8
move 1 from 3 to 9
move 2 from 8 to 6
move 13 from 4 to 6
move 1 from 8 to 7
move 2 from 9 to 6
move 3 from 5 to 7
move 3 from 2 to 5
move 3 from 2 to 6
move 5 from 6 to 2
move 4 from 2 to 5
move 4 from 5 to 7
move 5 from 5 to 7
move 7 from 9 to 6
move 6 from 7 to 2
move 22 from 6 to 5
move 10 from 5 to 8
move 7 from 5 to 4
move 8 from 8 to 5
move 18 from 6 to 2
move 5 from 7 to 5
move 1 from 8 to 2
move 6 from 5 to 1
move 7 from 4 to 2
move 4 from 1 to 5
move 1 from 7 to 9
move 1 from 8 to 6
move 1 from 7 to 8
move 10 from 5 to 9
move 12 from 2 to 1
move 8 from 5 to 2
move 19 from 2 to 9
move 1 from 6 to 8
move 13 from 9 to 3
move 8 from 1 to 2
move 5 from 1 to 3
move 10 from 2 to 1
move 7 from 2 to 5
move 3 from 5 to 7
move 4 from 1 to 3
move 1 from 2 to 3
move 3 from 1 to 2
move 1 from 8 to 6
move 2 from 7 to 5
move 4 from 1 to 3
move 6 from 5 to 4
move 2 from 2 to 1
move 1 from 2 to 9
move 6 from 4 to 5
move 5 from 5 to 9
move 1 from 6 to 8
move 1 from 5 to 1
move 6 from 9 to 2
move 5 from 2 to 4
move 3 from 1 to 6
move 2 from 4 to 7
move 22 from 3 to 9
move 1 from 8 to 4
move 2 from 4 to 3
move 2 from 6 to 1
move 2 from 1 to 5
move 1 from 6 to 7
move 1 from 7 to 4
move 6 from 3 to 7
move 1 from 2 to 4
move 8 from 7 to 3
move 1 from 4 to 5
move 1 from 7 to 9
move 5 from 3 to 6
move 1 from 8 to 4
move 4 from 3 to 2
move 32 from 9 to 3
move 3 from 6 to 7
move 5 from 9 to 3
move 1 from 9 to 7
move 2 from 9 to 2
move 2 from 4 to 3
move 2 from 5 to 4
move 5 from 3 to 2
move 3 from 7 to 8
move 1 from 7 to 2
move 1 from 8 to 5
move 1 from 3 to 4
move 5 from 4 to 5
move 4 from 5 to 2
move 3 from 5 to 7
move 1 from 7 to 5
move 1 from 6 to 5
move 2 from 8 to 5
move 15 from 2 to 4
move 3 from 5 to 6
move 4 from 6 to 5
move 2 from 5 to 2
move 1 from 2 to 4
move 25 from 3 to 9
move 2 from 5 to 2
move 11 from 9 to 2
move 13 from 2 to 1
move 4 from 4 to 7
move 12 from 9 to 8
move 6 from 7 to 8
move 7 from 4 to 7
move 7 from 7 to 8
move 1 from 5 to 1
move 5 from 4 to 3
move 2 from 2 to 1
move 2 from 9 to 5
move 7 from 1 to 7
move 1 from 1 to 4
move 12 from 3 to 2
move 1 from 3 to 9
move 1 from 1 to 3
move 1 from 9 to 1
move 7 from 7 to 2
move 1 from 4 to 7
move 2 from 8 to 7
move 7 from 1 to 2
move 1 from 3 to 4
move 26 from 2 to 1
move 4 from 8 to 1
move 3 from 1 to 6
move 1 from 6 to 3
move 1 from 6 to 9
move 1 from 3 to 8
move 20 from 1 to 3
move 1 from 9 to 7
move 4 from 7 to 1
move 1 from 5 to 3
move 4 from 3 to 5
move 1 from 6 to 2
move 6 from 3 to 2
move 8 from 1 to 4
move 1 from 1 to 5
move 3 from 1 to 4
move 7 from 2 to 4
move 10 from 3 to 8
move 4 from 4 to 3
move 12 from 4 to 7
move 3 from 3 to 1
move 2 from 4 to 3
move 2 from 8 to 1
move 6 from 8 to 9
move 5 from 9 to 6
move 1 from 9 to 3
move 3 from 8 to 7
move 10 from 8 to 5
move 4 from 8 to 7
move 9 from 7 to 9
move 4 from 8 to 4
move 2 from 4 to 3
move 3 from 1 to 7
move 11 from 7 to 4
move 6 from 4 to 8
move 1 from 7 to 3
move 4 from 5 to 1
move 5 from 3 to 6
move 5 from 9 to 4
move 1 from 9 to 8
move 10 from 4 to 8
move 5 from 1 to 2
move 1 from 7 to 6
move 9 from 6 to 3
move 7 from 8 to 7
move 3 from 4 to 1
move 2 from 2 to 1
move 9 from 8 to 3
move 10 from 5 to 8
move 18 from 3 to 9
move 1 from 7 to 8
move 1 from 5 to 3
move 4 from 8 to 3
move 2 from 6 to 3
move 6 from 7 to 2
move 1 from 5 to 3
move 1 from 1 to 9
move 10 from 3 to 9
move 4 from 1 to 8
move 13 from 8 to 1
move 3 from 1 to 8
move 3 from 2 to 4
move 5 from 2 to 6
move 5 from 6 to 4
move 28 from 9 to 2
move 2 from 9 to 5
move 2 from 5 to 2
move 1 from 3 to 7
move 2 from 1 to 4
move 3 from 8 to 3
move 1 from 9 to 4
move 3 from 4 to 6
move 2 from 3 to 7
move 8 from 1 to 5
move 3 from 7 to 6
move 14 from 2 to 8
move 1 from 9 to 1
move 6 from 5 to 6
move 4 from 2 to 5
move 9 from 8 to 2
move 4 from 8 to 4
move 7 from 2 to 4
move 12 from 4 to 3
move 5 from 4 to 7
move 5 from 7 to 4
move 1 from 8 to 7
move 1 from 4 to 5
move 2 from 5 to 4
move 1 from 5 to 8
move 1 from 5 to 9`;

let testO = 0;

// const day05Arr = `move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

let stacks = {
    1: ['G', 'F', 'V', 'H', 'P', 'S'],
    2: ['G', 'J', 'F', 'B', 'V', 'D', 'Z', 'M'],
    3: ['G', 'M', 'L', 'J', 'N'],
    4: ['N', 'G', 'Z', 'V', 'D', 'W', 'P'],
    5: ['V', 'R', 'C', 'B'],
    6: ['V', 'R', 'S', 'M', 'P', 'W', 'L', 'Z'],
    7: ['T', 'H', 'P'],
    8: ['Q', 'R', 'S', 'N', 'C', 'H', 'Z', 'V'],
    9: ['F', 'L', 'G', 'P', 'V', 'Q', 'J']
};

let stacksTwo = {
    1: ['G', 'F', 'V', 'H', 'P', 'S'],
    2: ['G', 'J', 'F', 'B', 'V', 'D', 'Z', 'M'],
    3: ['G', 'M', 'L', 'J', 'N'],
    4: ['N', 'G', 'Z', 'V', 'D', 'W', 'P'],
    5: ['V', 'R', 'C', 'B'],
    6: ['V', 'R', 'S', 'M', 'P', 'W', 'L', 'Z'],
    7: ['T', 'H', 'P'],
    8: ['Q', 'R', 'S', 'N', 'C', 'H', 'Z', 'V'],
    9: ['F', 'L', 'G', 'P', 'V', 'Q', 'J']
};

let test = 0;

// let stacks = {
//     1: ['Z', 'N'],
//     2: ['M', 'C', 'D'],
//     3: ['P']
// };
// let stacksTwo = {
//     1: ['Z', 'N'],
//     2: ['M', 'C', 'D'],
//     3: ['P']
// };

function day05(input) {
    input = input.split('\n').map(str => str.split(' '));

    let topCrates = '';

    for (let i = 0; i < input.length; i++) {
        let [count, from, to] = [Number(input[i][1]), Number(input[i][3]), Number(input[i][5])];

        for (let j = 0; j < count; j++) {
            stacks[to].push(stacks[from].pop());
        }
    }

    for (const key in stacks) {
        if (Object.hasOwnProperty.call(stacks, key)) {
            topCrates += (stacks[key][stacks[key].length - 1]);
        }
    }

    return topCrates;
}

function day05Two(input) {
    input = input.split('\n').map(str => str.split(' '));

    let topCrates = '';

    for (let i = 0; i < input.length; i++) {
        let [count, from, to] = [Number(input[i][1]), Number(input[i][3]), Number(input[i][5])];

        let tempArr = stacksTwo[from].splice(stacksTwo[from].length - count, count);

        for (let j = tempArr.length; j > 0; j--) {
            stacksTwo[to].push(tempArr.shift())
        }
    }

    for (const key in stacksTwo) {
        if (Object.hasOwnProperty.call(stacksTwo, key)) {
            topCrates += (stacksTwo[key][stacksTwo[key].length - 1]);
        }
    }

    return topCrates;
}

console.log(`Part one's answer is: ${day05(day05Arr)}`);
console.log(`Part two's answer is: ${day05Two(day05Arr)}`);