console.log("Day 24");

const day24Arr = `inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 4
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x 0
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 3
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 6
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -4
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 6
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -5
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 9
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 9
mul y x
add z y`;

function day24(input) {
    input = input.split('\n').map(str => str.split(' '));

    let registers = {w: 0, x: 0, y: 0, z: 0};

    // test:
    // for (let a = 99999999999999; a >= 11111111111111; a--) {
    //     if (!(a + '').includes('0')) {
    //         let aluInputs = a.toString().split('').sort((a, b) => a - b);

    //         for (let i = 0; i < input.length; i++) {
    //             const elem = input[i];
    //             let numTwo;
    //             if (isNaN(elem[2])) {
    //                 numTwo = Number(registers[elem[2]]);
    //             } else {
    //                 numTwo = Number(elem[2]);
    //             }
        
    //             switch (elem[0]) {
    //                 case 'inp':
    //                     registers[elem[1]] = Number(aluInputs.shift());
    //                     break;
    //                 case 'add':
    //                     registers[elem[1]] += numTwo;
    //                     break;
    //                 case 'mul':
    //                     registers[elem[1]] *= numTwo;
    //                     break;
    //                 case 'div':
    //                     if (numTwo == 0) {
    //                         continue test;
    //                     }
    //                     registers[elem[1]] = Math.trunc(registers[elem[1]] / numTwo);
    //                     break;
    //                 case 'mod':
    //                     if (registers[elem[1]] < 0 || numTwo <= 0) {
    //                         continue test;
    //                     }
    //                     registers[elem[1]] %= numTwo;
    //                     break;
    //                 case 'eql':
    //                     if (registers[elem[1]] == numTwo) {
    //                         registers[elem[1]] = 1;
    //                     } else {
    //                         registers[elem[1]] = 0;
    //                     }
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         }

    //         if (registers['z'] == 0) {
    //             return a;
    //         }
    //     }
    // }
}

console.log(`Part one's answer is: ${day24(day24Arr)}`);
// console.log(`Part two's answer is: ${day24()}`);