console.log("Day 25");

const day25Arr = [2981, 3075];
// const day25ArrTwo = [];

function day25() {
    let row = column = 1;
    let answer = 20151125;

    while ((row !== day25Arr[0]) || (column !== day25Arr[1])) {
        answer = (answer * 252533) % 33554393;

        if (row === 1) {
            row = column + 1;
            column = 1;
        } else {
            column++;
            row--;
        }
    }

    return answer;
}

// function day25Two() {
    
// }

console.log(`Part one's answer is: ${day25()}`);
// console.log(`Part two's answer is: ${day25Two()}`);