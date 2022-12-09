console.log("Day 06");

const day06Arr = `4,1,4,1,3,3,1,4,3,3,2,1,1,3,5,1,3,5,2,5,1,5,5,1,3,2,5,3,1,3,4,2,3,2,3,3,2,1,5,4,1,1,1,2,1,4,4,4,2,1,2,1,5,1,5,1,2,1,4,4,5,3,3,4,1,4,4,2,1,4,4,3,5,2,5,4,1,5,1,1,1,4,5,3,4,3,4,2,2,2,2,4,5,3,5,2,4,2,3,4,1,4,4,1,4,5,3,4,2,2,2,4,3,3,3,3,4,2,1,2,5,5,3,2,3,5,5,5,4,4,5,5,4,3,4,1,5,1,3,4,4,1,3,1,3,1,1,2,4,5,3,1,2,4,3,3,5,4,4,5,4,1,3,1,1,4,4,4,4,3,4,3,1,4,5,1,2,4,3,5,1,1,2,1,1,5,4,2,1,5,4,5,2,4,4,1,5,2,2,5,3,3,2,3,1,5,5,5,4,3,1,1,5,1,4,5,2,1,3,1,2,4,4,1,1,2,5,3,1,5,2,4,5,1,2,3,1,2,2,1,2,2,1,4,1,3,4,2,1,1,5,4,1,5,4,4,3,1,3,3,1,1,3,3,4,2,3,4,2,3,1,4,1,5,3,1,1,5,3,2,3,5,1,3,1,1,3,5,1,5,1,1,3,1,1,1,1,3,3,1`;

function day06(input, days) {
    input = input.split(',').map(str => Number(str));

    let registers = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    }

    for (let i = 0; i < input.length; i++) {
        registers[input[i]]++;
    }

    for (let a = 0; a < days; a++) {
        let temp = registers[0];
        registers[0] = registers[1];
        registers[1] = registers[2];
        registers[2] = registers[3];
        registers[3] = registers[4];
        registers[4] = registers[5];
        registers[5] = registers[6];
        registers[6] = registers[7];
        registers[6] += temp;
        registers[7] = registers[8];
        registers[8] = temp;
        
    }

    let totalFish = 0;

    for (const key in registers) {
        if (Object.hasOwnProperty.call(registers, key)) {
            totalFish += registers[key];
        }
    }

    return totalFish;
}

console.log(`Part one's answer is: ${day06(day06Arr, 80)}`);
console.log(`Part two's answer is: ${day06(day06Arr, 256)}`);