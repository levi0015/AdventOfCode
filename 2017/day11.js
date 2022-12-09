// console.log("Day 11");

// // const day11Arr = `ne,ne,ne`;
// // const day11Arr = `ne,ne,sw,sw`;
// // const day11Arr = `ne,ne,s,s`;
// const day11Arr = `se,sw,se,sw,sw`;

// function day11(input) {
//     input = input.split(',');

//     let coors = [0, 0];
    
//     for (let i = 0; i < input.length; i++) {
//         switch (input[i]) {
//             case 'nw':
//                 coors[0]++;
//                 coors[1]--;
//                 break;
//             case 'n':
//                 coors[0]++;
//                 break;
//             case 'ne':
//                 coors[0]++;
//                 coors[1]++;
//                 break;
//             case 'sw':
//                 coors[0]--;
//                 coors[1]--;
//                 break;
//             case 's':
//                 coors[0]--;
//                 break;
//             case 'se':
//                 coors[0]--;
//                 coors[1]++;
//                 break;
//             default:
//                 break;
//         }
//     }

//     let steps = Math.min(...coors);
//     steps += (Math.max(...coors) - steps);

//     return steps;
// }

// console.log(`Part one's answer is: ${day11(day11Arr)}`);
// // console.log(`Part two's answer is: ${day11()}`);