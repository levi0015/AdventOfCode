console.log("Day 15");

const day15Arr = [
    [17,1],
    [7 ,0],
    [19,2],
    [5 ,0],
    [3 ,0],
    [13,5],
    [11,0] // for part 2
];

function day15(num) {
    let isCorrectTime = false;
    let timing = -1;

    while (!isCorrectTime) {
        isCorrectTime = true;
        timing++;

        for (let i = 0; i < day15Arr.length - num; i++) {
            if ((day15Arr[i][1] + timing + (i + 1)) % day15Arr[i][0] == 0) {
                continue;
            } else {
                isCorrectTime = false;
            }
        }
    }

    return timing;
}

console.log(`Part one's answer is: ${day15(1)}`);
console.log(`Part two's answer is: ${day15(0)}`);