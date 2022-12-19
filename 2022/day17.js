console.log("%cDay 17", 'color: #ff4400');

const day17Arr = `>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>`;
const day17ArrTwo = `####

.#.
###
.#.

..#
..#
###

#
#
#
#

##
##`;

function day17(input, shapes) {
    input = input.split('');
    shapes = shapes.split('\n\n').map(x => x.split('\n').map(y => y.split('')));

    for (let i = 0; i < 2022; i++) {
        const moveDir = input[i % input.length];
    }
}

console.log(`Part one's answer is: ${day17(day17Arr, day17ArrTwo)}`);
// console.log(`Part two's answer is: ${day17()}`);

// console.log(`Part one's answer is: null`);
console.log(`Part two's answer is: null`);