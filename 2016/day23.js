console.log("Day 23");

const day23Arr = `cpy a b
dec b
cpy a d
cpy 0 a
cpy b c
inc a
dec c
jnz c -2
dec d
jnz d -5
dec b
cpy b c
cpy c d
dec d
inc c
jnz d -2
tgl c
cpy -16 c
jnz 1 c
cpy 90 c
jnz 81 d
inc a
inc d
jnz d -2
inc c
jnz c -5`;

// const day23Arr = `cpy 2 a
// tgl a
// tgl a
// tgl a
// cpy 1 a
// dec a
// dec a`;

function day23(input, numOfEggs, i = -1) {

    input = input.split('\n').map(str => str.split(' '));
    let nums = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i][1] > input.length) {
            nums.push(input[i][1]);
        }
    }

    let answerOne = (factorialize(numOfEggs) + (nums[0] * nums[1]));
    let answerTwo = (factorialize(numOfEggs) + (nums[0] * nums[1] ));

    return [answerOne, answerTwo];
}

function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}

console.log(`Part one's answer is: ${day23(day23Arr, 7)[0]}`);
console.log(`Part one's answer is: ${day23(day23Arr, 12)[1]}`);