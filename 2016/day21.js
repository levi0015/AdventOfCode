console.log("Day 21");

const day21Arr = [
    ["move", 0, 3], ["rotate", "right", 0], ["rotate", "right", 1], ["move", 1, 5], ["swap", "letter", "h" , "b"], ["reverse", 1 , 3], ["swap", "letter", "a" , "g"], ["swap", "letter", "b" , "h"], ["rotate", "c"], ["swap", "letter", "d" , "c"], ["rotate", "c"], ["swap", "position", 6, 5], ["rotate", "right", 7], ["swap", "letter", "b" , "h"], ["move", 4, 3], ["swap", "position", 1, 0], ["swap", "position", 7, 5], ["move", 7, 1], ["swap", "letter", "c" , "a"], ["move", 7, 5], ["rotate", "right", 4], ["swap", "position", 0, 5], ["move", 3, 1], ["swap", "letter", "c" , "h"], ["rotate", "d"], ["reverse", 0 , 2], ["rotate", "g"], ["move", 6, 7], ["move", 2, 5], ["swap", "position", 1, 0], ["swap", "letter", "f" , "c"], ["rotate", "right", 1], ["reverse", 2 , 4], ["rotate", "left", 1], ["rotate", "h"], ["rotate", "right", 1], ["rotate", "right", 5], ["swap", "position", 6, 3], ["move", 0, 5], ["swap", "letter", "g" , "f"], ["reverse", 2 , 7], ["reverse", 4 , 6], ["swap", "position", 4, 1], ["move", 2, 1], ["move", 3, 1], ["swap", "letter", "b" , "a"], ["rotate", "b"], ["reverse", 3 , 5], ["move", 0, 2], ["rotate", "b"], ["reverse", 4 , 5], ["rotate", "g"], ["reverse", 0 , 5], ["swap", "letter", "h" , "c"], ["reverse", 2 , 5], ["swap", "position", 7, 5], ["swap", "letter", "g" , "d"], ["swap", "letter", "d" , "e"], ["move", 1, 2], ["move", 3, 2], ["swap", "letter", "d" , "g"], ["swap", "position", 3, 7], ["swap", "letter", "b" , "f"], ["rotate", "right", 3], ["move", 5, 3], ["move", 1, 2], ["rotate", "b"], ["rotate", "c"], ["reverse", 2 , 3], ["move", 2, 3], ["rotate", "right", 1], ["move", 7, 0], ["rotate", "right", 3], ["move", 6, 3], ["rotate", "e"], ["swap", "letter", "c" , "b"], ["swap", "letter", "f" , "d"], ["swap", "position", 2, 5], ["swap", "letter", "f" , "g"], ["rotate", "a"], ["reverse", 3 , 4], ["rotate", "left", 7], ["rotate", "left", 6], ["swap", "letter", "g" , "b"], ["reverse", 3 , 6], ["rotate", "right", 6], ["rotate", "c"], ["rotate", "b"], ["rotate", "left", 1], ["reverse", 3 , 7], ["swap", "letter", "f" , "g"], ["swap", "position", 4, 1], ["rotate", "d"], ["move", 0, 4], ["swap", "position", 7, 6], ["rotate", "right", 6], ["rotate", "e"], ["move", 7, 3], ["rotate", "right", 3], ["swap", "position", 1, 2]
];

// const day21Arr = [
//     ["swap", "position", 4, 0],
//     ["swap", "letter", "d", "b"],
//     ["reverse", 0, 4],
//     ["rotate", "left", 1],
//     ["move", 1, 4],
//     ["move", 3, 0],
//     ["rotate", "b"],
//     ["rotate", "d"]
// ];

function day21(str) {
    let day21StrArr = str.split('');
    for (let i = 0; i < day21Arr.length; i++) {
        switch (day21Arr[i][0]) {
            case "swap":
                const [xSW, ySW] = [day21Arr[i][2], day21Arr[i][3]];
                switch (day21Arr[i][1]) {
                    case "position":
                        const [swapOne, swapTwo] = [day21StrArr[xSW], day21StrArr[ySW]]
                        // swap str[x] with str[y]
                        day21StrArr[xSW] = swapTwo;
                        day21StrArr[ySW] = swapOne;
                        break;
                    case "letter":
                        const [swapThree, swapFour] = [day21StrArr.indexOf(xSW), day21StrArr.indexOf(ySW)];
                        // swap indexOf(x) with indexOf(y)
                        day21StrArr[swapThree] = ySW;
                        day21StrArr[swapFour] = xSW;
                        break;
                    default:
                        break;
                }
                break;
            case "rotate":
                switch (day21Arr[i].length) {
                    case 3:
                        const [turnLeft, turnCount] = [day21Arr[i][1] == 'left', day21Arr[i][2]];
                        // rotate left/right x steps
                        for (let j = 0; j < turnCount; j++) {
                            if (turnLeft) {
                                day21StrArr.push(day21StrArr.shift());
                                continue;
                            }
                            day21StrArr.unshift(day21StrArr.pop());
                        }
                        break;
                    case 2:
                        //rotate (1 + indexOf(x) (+1 if x >= 4))
                        const turnLetter = day21Arr[i][1];
                        let turnNum = (1 + day21StrArr.indexOf(turnLetter));

                        if (day21StrArr.indexOf(turnLetter) >= 4) {
                            turnNum++;
                        }

                        for (let j = 0; j < turnNum; j++) {
                            day21StrArr.unshift(day21StrArr.pop());
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "reverse":
                const xRE = day21Arr[i][1];
                const yRE = day21Arr[i][2];
                // reverse index x through y (including x and y itself)
                day21StrArr = day21StrArr.map((v, i, a) => i >= xRE && i <= yRE ? a[yRE - i + xRE] : v);
                break;
            case "move":
                const [xMO, yMO] = [day21Arr[i][1], day21Arr[i][2]];
                // move str[x] to str[y]
                if (yMO >= day21StrArr.length) {
                    let k = xMO - day21StrArr.length + 1;
                    while (k--) {
                        arr.push(undefined);
                    }
                }
                day21StrArr.splice(yMO, 0, day21StrArr.splice(xMO, 1)[0]);
                break;
            default:
                break;
        }
    }

    return day21StrArr.join('');
}

function day21Two(str) {
    let day21StrArr = str.split('');
    for (let i = day21Arr.length - 1; i >= 0; i--) {
        switch (day21Arr[i][0]) {
            case "swap":
                const [xSW, ySW] = [day21Arr[i][2], day21Arr[i][3]];
                switch (day21Arr[i][1]) {
                    case "position":
                        const [swapOne, swapTwo] = [day21StrArr[xSW], day21StrArr[ySW]]
                        // swap str[x] with str[y]
                        day21StrArr[xSW] = swapTwo;
                        day21StrArr[ySW] = swapOne;
                        break;
                    case "letter":
                        const [swapThree, swapFour] = [day21StrArr.indexOf(xSW), day21StrArr.indexOf(ySW)];
                        // swap indexOf(x) with indexOf(y)
                        day21StrArr[swapThree] = ySW;
                        day21StrArr[swapFour] = xSW;
                        break;
                    default:
                        break;
                }
                break;
            case "rotate":
                switch (day21Arr[i].length) {
                    case 3:
                        const [turnLeft, turnCount] = [day21Arr[i][1] == 'left', day21Arr[i][2]];
                        // rotate left/right x steps
                        for (let j = 0; j < turnCount; j++) {
                            if (turnLeft) {
                                day21StrArr.unshift(day21StrArr.pop());
                                continue;
                            }
                            day21StrArr.push(day21StrArr.shift());
                        }
                        break;
                    case 2:
                        // console.log(day21StrArr);
                        let afterArr = [...day21StrArr];
                        test3:
                        for (let k = 0; k < day21StrArr.length - 1; k++) {
                            day21StrArr = [...afterArr];
                            for (let l = 0; l < (k + 1); l++) {
                                day21StrArr.push(day21StrArr.shift())
                            }
                            let checkArr = [...day21StrArr];

                            const turnLetter = day21Arr[i][1];
                            let turnNum = (1 + day21StrArr.indexOf(turnLetter));
    
                            if (turnNum >= 5) {
                                turnNum++;
                            }
    
                            for (let j = 0; j < (turnNum % 5); j++) {
                                day21StrArr.unshift(day21StrArr.pop());
                            }

                            if (arraysEqual(day21StrArr, afterArr)) {
                                day21StrArr = [...checkArr];
                                break test3;
                            }
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "reverse":
                const xRE = day21Arr[i][1];
                const yRE = day21Arr[i][2];
                // reverse index x through y (including x and y itself)
                day21StrArr = day21StrArr.map((v, i, a) => i >= xRE && i <= yRE ? a[yRE - i + xRE] : v);
                break;
            case "move":
                const [xMO, yMO] = [day21Arr[i][2], day21Arr[i][1]];
                // move str[x] to str[y]
                if (yMO >= day21StrArr.length) {
                    let k = xMO - day21StrArr.length + 1;
                    while (k--) {
                        arr.push(undefined);
                    }
                }
                day21StrArr.splice(yMO, 0, day21StrArr.splice(xMO, 1)[0]);
                break;
            default:
                break;
        }
    }

    return day21StrArr.join('');
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

// console.log(`Part one's answer is: ${day21('abcde')}`);
// console.log(`Part two's answer is: ${day21Two('decab')}`);
console.log(`Part two's answer is: ${day21('abcdefgh')}`);
console.log(`Part two's answer is: ${day21Two('fbgdceah')} **wrong**`);