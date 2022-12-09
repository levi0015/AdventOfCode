console.log("Day 15");

const day15Arr = [];

function day15(a, b, cyclusCount, partTwo) {
    // console.time()
    const aProd = 16807;
    const bProd = 48271;
    const divide = 2147483647;
    let correctCount = 0;
    
    for (let i = 0; i < cyclusCount; i++) {
        a *= aProd;
        a %= divide;
        b *= bProd;
        b %= divide;
        if (partTwo) {
            while (a % 4 != 0) {
                a *= aProd;
                a %= divide;
            }
            while (b % 8 != 0) {
                b *= bProd;
                b %= divide;
            }
        }
        
        if (a.toString(2).slice(-16) == b.toString(2).slice(-16)) {
            correctCount++;
        }
    }
    
    // console.timeEnd()
    return correctCount
}

// console.log(`Part one's answer is: ${day15(883, 879, 40000000)}`);
// console.log(`Part two's answer is: ${day15(883, 879, 5000000, true)}`);
console.log(`Part one's answer is: 609`);
console.log(`Part two's answer is: 253`);
// console.log(`Part one's answer is: ${day15(65, 8921, 40000000)}`);
// console.log(`Part two's answer is: ${day15(65, 8921, 5000000, true)}`);