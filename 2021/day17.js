console.log("Day 17");

const day17Arr = `target area: x=287..309 y=-76..-48`;
// const day17Arr = `target area: x=20..30 y=-10..-5`;

function day17(input, start, end, partTwo) {
    input = input.split(' ').slice(2).map(str => str.split('=')[1].split('..'));
    const [targetX, targetY] = [input[0], input[1]];

    let possibilities = [];
    let velAnswer = [0, 0, 0];

    for (let a = 0; a < end; a++) {
        test:
        for (let b = start; b < end; b++) {
            let pos = [0, 0];
            let vel = [a, b];
            let highestYPos = 0;
            
            while (pos[0] <= targetX[1] && pos[1] >= targetY[0]) {
                pos[0] += vel[0];
                pos[1] += vel[1];
                if (vel[0] > 0) {
                    vel[0]--;
                } else if (vel[0] < 0) {
                    vel[0]++;
                }
                vel[1]--;

                if (pos[1] > highestYPos) {
                    highestYPos = pos[1];
                }

                if (pos[0] >= targetX[0] && pos[0] <= targetX[1] && pos[1] >= targetY[0] && pos[1] <= targetY[1]) {
                    // inside Target Area
                    if (partTwo) {
                        possibilities.push([a, b]);
                        continue test;
                    } else if (highestYPos > velAnswer[2]) {
                        velAnswer = [a, b, highestYPos];
                        continue test;
                    }
                }
            }
        }
    }
    
    return [velAnswer[2], possibilities.length]
}

console.log(`Part one's answer is: ${day17(day17Arr, 0, 100)[0]}`);
console.log(`Part two's answer is: ${day17(day17Arr, -100, 350, true)[1]}`);