console.log(`Day 17`);

// const day17Arr = [20, 15, 10, 5, 5];
// const liters = 25;

const day17Arr = [11, 30, 47, 31, 32, 36, 3, 1, 5, 3, 32, 36, 15, 11, 46, 26, 28, 1, 19, 3];
const liters = 150;

let combinations = null;
let count = 0;

function day17() {
    subsetSum(day17Arr, liters);
    return [count, combinations.length];
}

function subsetSum(numbers, target, partial) {
    let s, n, remaining;
  
    partial = partial || [];
  
    // sum partial
    s = partial.reduce(function (a, b) {
        return a + b;
    }, 0);
  
    // check if the partial sum is equals to target
    if (s === target) {
        count++;
        if (combinations == null || partial.length < combinations[0].length) {
            combinations = [];
            combinations.push(partial);
        } else if (partial.length == combinations[0].length) {
            combinations.push(partial);
        }
        // console.log("%s=%s", partial.join("+"), target);
    }
  
    if (s >= target) {
        return;  // if we reach the number why bother to continue
    }
  
    for (var i = 0; i < numbers.length; i++) {
        n = numbers[i];
        remaining = numbers.slice(i + 1);
        subsetSum(remaining, target, partial.concat([n]));
    }
}

// console.log(`Part one's answer is: ${day17()[0]}`);
// console.log(`Part two's answer is: ${day17()[1] / 2}`);

day17();
console.log(`Part one's answer is: ${count}`);
console.log(`Part two's answer is: ${combinations.length}`);