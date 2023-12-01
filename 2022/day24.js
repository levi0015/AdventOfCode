console.log("%cDay 24", 'color: #ff4400');

const day24Arr = `#.######
#>>.<^<#
#.<..<<#
#>v.><>#
#<^v^^>#
######.#`;

function day24(input) {
    input = input.split('\n').map(x => x.split(''));
    let startPos = [];
    let endPos = [];
    let blizzards = [];

    console.log(input);
    for (let a = 0; a < input[0].length; a++) {
        if (input[0][a] == '.') {
            startPos = [0, a];
        }
        if (input[input.length - 1][a] == '.') {
            endPos = [input.length - 1, a];
        }
    }

    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            switch (input[i][j]) {
                case '^':
                    blizzards.push([i, j, 'up']);
                    break;
                case 'v':
                    blizzards.push([i, j, 'down']);
                    break;
                case '>':
                    blizzards.push([i, j, 'right']);
                    break;
                case '<':
                    blizzards.push([i, j, 'left']);
                    break;
                default:
                    break;
            }
        }
    }

    let steps = 0;
    loop:
    while (true) {
        for (let k = 0; k < blizzards.length; k++) {
            blizzards[k] = nextCoorBlizzard(blizzards[k], input);
        }


        if (safePos([startPos[0], startPos[1] + 1], blizzards, input)) {
            // right
            startPos = [startPos[0], startPos[1] + 1];
        } else if (safePos([startPos[0] + 1, startPos[1]], blizzards, input)) {
            // down
            startPos = [startPos[0] + 1, startPos[1]];
        } else if (safePos([startPos[0], startPos[1] - 1], blizzards, input)) {
            // left
            startPos = [startPos[0], startPos[1] - 1];
        } else if (safePos([startPos[0] - 1, startPos[1]], blizzards, input)) {
            // up
            startPos = [startPos[0] - 1, startPos[1]];
        }

        steps++;
        if (startPos[0] == endPos[0] && startPos[1] == endPos[1]) {
            break loop;
        }
        break loop;
    }

    return steps;
}

function safePos(pos, blizzards, input) {
    if (pos[0] <= 0 || pos[1] <= 0) {
        return false;
    }
    if (input[pos[0]][pos[1]] == '#') {
        return false;
    }
    for (let i = 0; i < blizzards.length; i++) {
        if (blizzards[i][0] == pos[0] && blizzards[i][1] == pos[1]) {
            return false;
        }
    }
    return true;
}

function nextCoorBlizzard(arr, input) {
    switch (arr[2]) {
        case 'up':
            if (arr[0] - 1 == 0) {
                return [input.length - 2, arr[1], arr[2]];
            }
            return [arr[0] - 1, arr[1], arr[2]];
        case 'down':
            if (arr[0] + 1 == input.length - 1) {
                return [1, arr[1], arr[2]];
            }
            return [arr[0] + 1, arr[1], arr[2]];
        case 'right':
            if (arr[1] + 1 == input[0].length - 1) {
                return [arr[0], 1, arr[2]];
            }
            return [arr[0], arr[1] + 1, arr[2]];
        case 'left':
            if (arr[1] - 1 == 0) {
                return [arr[0], input[0].length - 2, arr[2]];
            }
            return [arr[0], arr[1] - 1, arr[2]];
        default:
            break;
    }

    return true;
}

console.log(`Part one's answer is: ${day24(day24Arr)}`);
// console.log(`Part two's answer is: ${day24()}`);

console.log(`Part one's answer is: null`);
console.log(`Part two's answer is: null`);