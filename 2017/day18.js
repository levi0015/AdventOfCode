console.log("Day 18");

const day18Arr = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 622
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

function day18(input) {
    input = input.split('\n').map(str => str.split(' '));
    let registers = {};
    let lastSound = 0;
    let answer = 0;

    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i][1])) {
            registers[input[i][1]] = 0;
        }
        if (isNaN(input[i][2]) && input[i][2] != undefined) {
            registers[input[i][2]] = 0;
        }
    }

    let j = 0;
    test:
    while (j < input.length) {
        const key = input[j][0];
        const x = input[j][1];
        let y;
        if (isNaN(input[j][2])) {
            y = Number(registers[input[j][2]]);
        } else {
            y = input[j][2];
        }
        y = Number(y);

        switch (key) {
            case "snd":
                lastSound = registers[x];
                j++;
                break;
            case "set":
                registers[x] = y;
                j++;
                break;
            case "add":
                registers[x] += y;
                j++;
                break;
            case "mul":
                registers[x] *= y;
                j++;
                break;
            case "mod":
                registers[x] %= y;
                j++;
                break;
            case "rcv":
                if (registers[x] != 0) {
                    answer = lastSound;
                    break test;
                } else {
                    j++;
                }
                break;
            case "jgz":
                if (isNaN(x)) {
                    if (registers[x] > 0) {
                        j += y;
                    } else {
                        j++;
                    }
                } else {
                    if (x > 0) {
                        j += y;
                    } else {
                        j++;
                    }
                }
                break;
            default:
                break;
        }
    }

    return answer;
}

function day18Two(input) {
    input = input.split('\n').map(str => str.split(' '));
    let registersOne = {};
    let registersTwo = {};
    let receiveOne = [];
    let receiveTwo = [];
    let receiveOneIndex = 0;
    let receiveTwoIndex = 0;
    let pOneActive = true;
    let pTwoActive = true;
    let pSendCount = 0;

    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i][1])) {
            registersOne[input[i][1]] = 0;
            registersTwo[input[i][1]] = 0;
        }
        if (isNaN(input[i][2]) && input[i][2] != undefined) {
            registersOne[input[i][2]] = 0;
            registersTwo[input[i][2]] = 0;
        }
    }
    registersOne.p = 0;
    registersTwo.p = 1;

    let j = 0;
    let k = 0;
    test:
    while (j < input.length || k < input.length) {
        const key = input[j][0];
        const x = input[j][1];
        let y;
        if (isNaN(input[j][2])) {
            y = Number(registersOne[input[j][2]]);
        } else {
            y = input[j][2];
        }
        y = Number(y);

        if (pOneActive) {
            switch (key) {
                case "snd":
                    if (isNaN(x)) {
                        receiveTwo.push(registersOne[x]);
                    } else {
                        receiveTwo.push(x);
                    }
                    pSendCount++;
                    j++;
                    break;
                case "set":
                    registersOne[x] = y;
                    j++;
                    break;
                case "add":
                    registersOne[x] += y;
                    j++;
                    break;
                case "mul":
                    registersOne[x] *= y;
                    j++;
                    break;
                case "mod":
                    registersOne[x] %= y;
                    j++;
                    break;
                case "rcv":
                    if (receiveOne[receiveOneIndex] != undefined) {
                        registersOne[x] = Number(receiveOne[receiveOneIndex]);
                        receiveOneIndex++;
                    } else {
                        pOneActive = false;
                        if (pTwoActive == false) {
                            break test;
                        }
                    }
                    j++;
                    break;
                case "jgz":
                    if (isNaN(x)) {
                        if (registersOne[x] > 0) {
                            j += y;
                        } else {
                            j++;
                        }
                    } else {
                        if (x > 0) {
                            j += y;
                        } else {
                            j++;
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        ///////////////////////////

        const keyTwo = input[k][0];
        const xTwo = input[k][1];
        let yTwo;
        if (isNaN(input[k][2])) {
            yTwo = Number(registersTwo[input[k][2]]);
        } else {
            yTwo = input[k][2];
        }
        yTwo = Number(yTwo);

        if (pTwoActive) {
            switch (keyTwo) {
                case "snd":
                    if (isNaN(xTwo)) {
                        receiveOne.push(registersTwo[xTwo]);
                    } else {
                        receiveOne.push(xTwo);
                    }
                    k++;
                    break;
                case "set":
                    registersTwo[xTwo] = yTwo;
                    k++;
                    break;
                case "add":
                    registersTwo[xTwo] += yTwo;
                    k++;
                    break;
                case "mul":
                    registersTwo[xTwo] *= yTwo;
                    k++;
                    break;
                case "mod":
                    registersTwo[xTwo] %= yTwo;
                    k++;
                    break;
                case "rcv":
                    if (receiveTwo[receiveTwoIndex] != undefined) {
                        registersTwo[xTwo] = Number(receiveTwo[receiveTwoIndex]);
                        receiveTwoIndex++;
                    } else {
                        pTwoActive = false;
                        if (pOneActive == false) {
                            break test;
                        }
                    }
                    k++;
                    break;
                case "jgz":
                    if (isNaN(xTwo)) {
                        if (registersTwo[xTwo] > 0) {
                            k += yTwo;
                        } else {
                            k++;
                        }
                    } else {
                        if (xTwo > 0) {
                            k += yTwo;
                        } else {
                            k++;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }

    return pSendCount;
}

console.log(`Part one's answer is: ${day18(day18Arr)}`);
console.log(`Part two's answer is: ${day18Two(day18Arr)} *wrong*`);