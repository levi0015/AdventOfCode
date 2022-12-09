console.log("Day 01");

const day01Arr = ["R4", "R1", "L2", "R1", "L1", "L1", "R1", "L5", "R1", "R5", "L2", "R3", "L3", "L4", "R4", "R4", "R3", "L5", "L1", "R5", "R3", "L4", "R1", "R5", "L1", "R3", "L2", "R3", "R1", "L4", "L1", "R1", "L1", "L5", "R1", "L2", "R2", "L3", "L5", "R1", "R5", "L1", "R188", "L3", "R2", "R52", "R5", "L3", "R79", "L1", "R5", "R186", "R2", "R1", "L3", "L5", "L2", "R2", "R4", "R5", "R5", "L5", "L4", "R5", "R3", "L4", "R4", "L4", "L4", "R5", "L4", "L3", "L1", "L4", "R1", "R2", "L5", "R3", "L4", "R3", "L3", "L5", "R1", "R1", "L3", "R2", "R1", "R2", "R2", "L4", "R5", "R1", "R3", "R2", "L2", "L2", "L1", "R2", "L1", "L3", "R5", "R1", "R4", "R5", "R2", "R2", "R4", "R4", "R1", "L3", "R4", "L2", "R2", "R1", "R3", "L5", "R5", "R2", "R5", "L1", "R2", "R4", "L1", "R5", "L3", "L3", "R1", "L4", "R2", "L2", "R1", "L1", "R4", "R3", "L2", "L3", "R3", "L2", "R1", "L4", "R5", "L1", "R5", "L2", "L1", "L5", "L2", "L5", "L2", "L4", "L2", "R3"];
// const testArr = ["R8", "R4", "R4", "R8"];

function day01One() {
    const facingStates = ["north", "east", "south", "west"];
    let coors = [0, 0];

    for (let i = 0; i < day01Arr.length; i++) {
        let rotation = day01Arr[i][0];
        let distance = Number(day01Arr[i].slice(1, day01Arr[i].length));

        switch (rotation) {
            case "R":
                // turn right
                for (let i = 0; i < 3; i++) {
                    facingStates.unshift(facingStates.pop());
                }
                break;
            case "L":
                // turn left
                for (let i = 0; i < 1; i++) {
                    facingStates.unshift(facingStates.pop());
                }
                break;
            default:
                console.log(`Rotation Error!`);
                break;
        }

        switch (facingStates[0]) {
            case "north":
                coors[1] += distance;
                break;
            case "east":
                coors[0] += distance;
                break;
            case "south":
                coors[1] -= distance;
                break;
            case "west":
                coors[0] -= distance;
                break;
            default:
                console.log(`Walk Error!`);
                break;
        }
    }
    
    let blocksAway = 0;

    for (let j = 0; j < coors.length; j++) {
        if (coors[j] < 0) {
            blocksAway += (coors[j] * -1);
        } else {
            blocksAway += coors[j];
        }
    }

    return blocksAway;
}

function day01Two() {
    const facingStates = ["north", "east", "south", "west"];
    let coorsPassed = [[0, 0]];
    let coors = [0, 0];

    stop:
    for (let i = 0; i < day01Arr.length; i++) {
        let rotation = day01Arr[i][0];
        let distance = Number(day01Arr[i].slice(1, day01Arr[i].length));
        // console.log(`switch`);  
        switch (rotation) {
            case "R":
                // turn right
                for (let i = 0; i < 3; i++) {
                    facingStates.unshift(facingStates.pop());
                }
                break;
            case "L":
                // turn left
                for (let i = 0; i < 1; i++) {
                    facingStates.unshift(facingStates.pop());
                }
                break;
            default:
                console.log(`Rotation Error!`);
                break;
        }

        for (let j = 0; j < distance; j++) {
            switch (facingStates[0]) {
                case "north":
                    coors[1]++;
                    break;
                case "east":
                    coors[0]++;
                    break;
                case "south":
                    coors[1]--;
                    break;
                case "west":
                    coors[0]--;
                    break;
                default:
                    console.log(`Walk Error!`);
                    break;
            }

            for (let k = 0; k < coorsPassed.length; k++) {
                if (coorsPassed[k][0] == coors[0] && coorsPassed[k][1] == coors[1]) {
                    break stop;
                }
            }
            coorsPassed.push([...Object.keys(coors).map(key => coors[key])]);
        }
    }

    let blocksAway = 0;

    for (let j = 0; j < coors.length; j++) {
        if (coors[j] < 0) {
            blocksAway += (coors[j] * -1);
        } else {
            blocksAway += coors[j];
        }
    }

    return blocksAway;
}

console.log(`Part one's answer is: ${day01One()}`);
console.log(`Part two's answer is: ${day01Two()}`);