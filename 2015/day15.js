console.log(`Day 15`);

let day15Arr = [
    [3, 0, 0, -3, 2],
    [-3, 3, 0, 0, 9],
    [-1, 0, 4, 0, 1],
    [0, 0, -2, 2, 8]
];

function day15() {
    let highestResult = null;
    let highestResultTwo = null;
    
    for (let a = 1; a <= 99; a++) {
        // let b = 100 - a;
        // let count = 0;
        // count += (a + b);
        // console.log(a, b);

        for (let b = 1; b <= (99 - a); b++) {
            // let c = (100 - a - b);
            // let countTwo = 0;
            // countTwo += (a + b + c);
            // console.log(a, b, c);

            for (let c = 1; c <= (99 - a - b); c++) {
                let d = (100 - a - b - c);
                // let countThree = 0;
                // countThree += (a + b + c + d);
                // console.log(a, b, c, d);

                let cap = Math.max((day15Arr[0][0] * a) + (day15Arr[1][0] * b) + (day15Arr[2][0] * c) + (day15Arr[3][0] * d), 0);
                let dur = Math.max((day15Arr[0][1] * a) + (day15Arr[1][1] * b) + (day15Arr[2][1] * c) + (day15Arr[3][1] * d), 0);
                let fla = Math.max((day15Arr[0][2] * a) + (day15Arr[1][2] * b) + (day15Arr[2][2] * c) + (day15Arr[3][2] * d), 0);
                let tex = Math.max((day15Arr[0][3] * a) + (day15Arr[1][3] * b) + (day15Arr[2][3] * c) + (day15Arr[3][3] * d), 0);
                let cal = Math.max((day15Arr[0][4] * a) + (day15Arr[1][4] * b) + (day15Arr[2][4] * c) + (day15Arr[3][4] * d), 0);
                
                const result = (cap * dur * fla * tex);

                if (cal == 500 && (highestResultTwo == null || result > highestResultTwo)) {
                    highestResultTwo = result;
                } else if (highestResult == null || result > highestResult) {
                    highestResult = result;
                }
            }
        }
    }
    return [highestResult, highestResultTwo];
}

console.log(`Part one's answer is: ${day15()[0]}`);
console.log(`Part two's answer is: ${day15()[1]}`);