// console.log("Day 13");

// const day13Arr = `0: 3
// 1: 2
// 4: 4
// 6: 4`;

// function day13(input) {
//     input = input.split('\n').map(str => str.split(': '));

//     let firewall = [];
//     // console.log(input)

//     for (let i = 0; i <= input[input.length - 1][0]; i++) {
//         for (let j = 0; j < input.length; j++) {
//             if (input[j][0] == i) {
//                 for (let k = 0; k < input[j][1].length; k++) {
//                     firewall.push(['.']);
//                 }
//             }
//             firewall.push(['.']);
//         }
//     }

//     // console.log(firewall)
// }

// console.log(`Part one's answer is: ${day13(day13Arr)}`);
// // console.log(`Part two's answer is: ${day13()}`);