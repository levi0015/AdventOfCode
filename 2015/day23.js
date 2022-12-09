console.log("Day 23");

// const day23Arr = [
//     ["inc", "a"],
//     ["jio", "a", 2],
//     ["tpl", "a"],
//     ["inc", "a"]
// ];

const day23Arr = [
    ["jio", "a", +22],
    ["inc", "a"],
    ["tpl", "a"],
    ["tpl", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["jmp", +19],
    ["tpl", "a"],
    ["tpl", "a"],
    ["tpl", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["inc", "a"],
    ["tpl", "a"],
    ["tpl", "a"],
    ["jio", "a", +8],
    ["inc", "b"],
    ["jie", "a", +4],
    ["tpl", "a"],
    ["inc", "a"],
    ["jmp", +2],
    ["hlf", "a"],
    ["jmp", -7]
];

function day23() {
    let answers = [];

    for (let h = 0; h < 2; h++) {
        let a = h;
        let b = 0;

        let i = 0;
        while (i < day23Arr.length) {
            const action = day23Arr[i][0];

            switch (day23Arr[i][1]) {
                case "a":
                    switch (action) {
                        case "inc":
                            a += 1;
                            i++;
                            break;
                        case "hlf":
                            a /= 2;
                            i++;
                            break;
                        case "tpl":
                            a *= 3;
                            i++;
                            break;
                        case "jie":
                            if (a % 2 == 0) {
                                i += day23Arr[i][2];
                            } else {
                                i++;
                            }
                            break;
                        case "jio":
                            if (a == 1) {
                                i += day23Arr[i][2];
                            } else {
                                i++;
                            }
                            break;
                        default:
                            console.log(`Error!`);
                            i++;
                            break;
                    }
                    break;
                case "b":
                    switch (action) {
                        case "inc":
                            b += 1;
                            i++;
                            break;
                        case "hlf":
                            b /= 2;
                            i++;
                            break;
                        case "tpl":
                            b *= 3;
                            i++;
                            break;
                        case "jie":
                            if (b % 2 == 0) {
                                i += day23Arr[i][2];
                            } else {
                                i++;
                            }
                            break;
                        case "jio":
                            if (b == 1) {
                                i += day23Arr[i][2];
                            } else {
                                i++;
                            }
                            break;
                        default:
                            console.log(`Error! one`);
                            i++;
                            break;
                    }
                    break;
                default:
                    if (day23Arr[i][0] == "jmp") {
                        i += day23Arr[i][1];
                    } else {
                        console.log(`Error! two`);
                        i++;
                    }
                    break;
            }
        }
        answers.push([b]);
    }

    return answers;
}

console.log(`Part one's answer is: ${day23()[0]}`);
console.log(`Part two's answer is: ${day23()[1]}`);