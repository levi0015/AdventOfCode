console.log("Day 06");

const day06Arr = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];
// const day06Arr = [0, 2, 7, 0];

function day06(partTwo) {
    let arr = [...day06Arr];
    let allArrays = [[...arr]];
    let cycles = 0;

    let isDone = false;
    while (!isDone) {
        // isDone = true;

        let maxIndex = arr.indexOf(Math.max(...arr));
        let blockCount = arr[maxIndex];
        arr[maxIndex] = 0;

        for (let i = (maxIndex + 1); i < (maxIndex + 1 + blockCount); i++) {
            arr[i % arr.length]++;
        }
        cycles++;
        
        for (let j = 0; j < allArrays.length; j++) {
            if (arraysEqual(arr, allArrays[j])) {
                isDone = true;
                if (partTwo) {
                    return (allArrays.length - j);
                }
            }
        }

        allArrays.push([...arr])
    }

    return cycles;
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

console.log(`Part one's answer is: ${day06()}`);
console.log(`Part two's answer is: ${day06(true)}`);