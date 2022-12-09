console.log("Day 02");

const day02Arr = [
    "UUURRRRULRDLRDRRDURDDDLLDLLLULDUDDLDLULUURULRLDLRRLLLRRDRRLDDLLULUDUDDLRDRDUURDLURUURLRULLDDURULRRURDUURLULUUUURDDDDUUDLULRULLLRLLRRRURDLLRLLRRRUURULRDRUUDDDDDLLLRURRURRUURDUURDDRDLULRRLLLDRRRLURRLLURLDRRDDLDLRRLLRDRLLLLDLULDLRRDRRLDDURLULLUDLUDRRDRRLRLULURDRLRLUUUDLRLDLLLURDUDULULDDRUUURLLLDLLDDUDDRURURUDDLUULRDRRRRLDRDDURLUDURDULLDLUDLULDRLRLLRLLLLRURDURLLDRRDRLRUUUUULLLRUDURUDLLLUDLLLLRDLDRDUDRURLUDDUDDURLUUUUDDLLUDLULLLLLDUDLLRLRRDDDULULRLDRLLULDLUDLLURULRDDUURULRDLDLDLRL",
    "URUUURDULUDLUUUUDDRRRDRRRLDUDLRDRRDRDDLRUULDLLDUDULLLRLDRDRRLDLDLUUDRUULDUDULDUDURURDDURULDLURULRLULDUDDUULDLLLDDURDDRDDURUULUUDRLDDULDRRRRDURRUDLLLURDDDLRULLRDDRDDDDLUUDRDUULRRRRURULDDDLDDRDRRUDRRURUDRDDLDRRRLLURURUULUUDRDULLDRLRDRRDDURDUDLDRLUDRURDURURULDUUURDUULRRRRRUDLLULDDDRLULDDULUDRRRDDRUDRRDLDLRUULLLLRRDRRLUDRUULRDUDRDRRRDDRLLRUUDRLLLUDUDLULUUDULDRRRRDDRURULDULLURDLLLDUUDLLUDRLDURRRLDDDURUDUDURRULDD",
    "LRUDDULLLULRLUDUDUDRLLUUUULLUDLUUUUDULLUURDLLRDUDLRUDRUDDURURRURUDLLLRLDLUDRRRRRRDLUURLRDDDULRRUDRULRDRDDUULRDDLDULDRRRDDLURRURLLLRURDULLRUUUDDUDUURLRLDDUURLRDRRLURLDRLLUUURDRUUDUUUDRLURUUUDLDRRLRLLRRUURULLLRLLDLLLDULDDLDULDLDDRUDURDDURDUDURDLLLRRDDLULLLUDURLUDDLDLUUDRDRUDUUDLLDDLLLLDRDULRDLDULLRUDDUULDUDLDDDRUURLDRRLURRDDRUUDRUDLLDLULLULUDUDURDDRLRDLRLDRLDDRULLLRUDULDRLRLRULLRLLRRRLLRRRDDRULRUURRLLLRULDLUDRRDDLLLUDDUDDDLURLUDRDLURUUDLLDLULURRLLDURUDDDDRLULRDDLRLDDLRLLDDRRLRDUDUUULRRLRULUDURDUDRLRLRUDUDLLRRRRLRRUDUL",
    "RULLLLUUUDLLDLLRULLRURRULDDRDLUULDRLLRUDLLRRLRDURLLDUUUUURUUURDLUURRLDDDLRRRRLRULDUDDLURDRRUUDLRRRDLDDUDUDDRUDURURLDULLDLULDLLUDLULRDRLLURRLLDURLDLRDLULUDDULDLDDDDDUURRDRURLDLDULLURDLLDDLLUDLDLDRLRLDLRDRLDLRRUUDRURLUUUDLURUULDUDRDULLDURUDLUUURRRLLDUDUDDUUULLLRUULDLURUDDRLUDRDDLDLLUDUDRRRDDUUULUULLLRLLUURDUUDRUUULULLDLDRUUDURLLUULRLDLUURLLUUDRURDDRLURULDUDUUDRRUUURDULRLDUUDDRURURDRRULDDDRLUDLLUUDURRRLDLRLRDRURLURLLLRLDDLRRLDLDDURDUUDRDRRLDRLULDRLURUUUDDRLLLDDLDURLLLLDRDLDRRUDULURRLULRDRLLUULLRLRDRLLULUURRUDRUDDDLLDURURLURRRDLLDRDLUDRULULULRLDLRRRUUDLULDURLRDRLULRUUURRDDLRUURUDRURUDURURDD",
    "DURRDLLLDDLLDLLRLULULLRDLDRRDDRDLRULURRDUUDDRLLDDLDRRLRDUDRULDLRURDUUDRDDLLDRRDRUDUDULLDDDDLDRRRLRLRDRDLURRDDLDDDUUDRDRLLLDLUDDDLUULRDRLLLRLLUULUDDDRLDUUUURULRDDURRDRLUURLUDRLRLLLDDLRDDUULRRRRURDLDDDRLDLDRRLLDRDDUDDUURDLDUUDRDLDLDDULULUDDLRDDRLRLDDLUDLLDRLUDUDDRULLRLDLLRULRUURDDRDRDRURDRRLRDLLUDDRRDRRLDDULLLDLUDRRUDLDULDRURRDURLURRLDLRDLRUDLULUDDRULRLLDUURULURULURRLURRUULRULRRRLRDLULRLRLUDURDDRUUURDRLLRRRDDLDRRRULLDLRDRULDRRLRRDLUDDRDDDUUURRLULLDRRUULULLRRRRLDDRDDLUURLLUDLLDUDLULUULUDLLUUURRRUDDDRLLLRDRUUDUUURDRULURRLRDLLUURLRDURULDRRUDURRDDLDRLDRUUDRLLUDLRRU"
];

// const testArr = [
//     "ULL",
//     "RRDDD",
//     "LURDL",
//     "UUUUD"
// ];

const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const keypadTwo = [
    [false, false,  false,  false, false, false, false],
    [false, false,  false,  1,     false, false, false],
    [false, false,  2,      3,     4,     false, false],
    [false, 5,      6,      7,     8,     9,     false],
    [false, false, "A",    "B",   "C",    false, false],
    [false, false,  false, "D",    false, false, false],
    [false, false,  false,  false, false, false, false]
];

function day02() {
    let startPoint = [1, 1];
    let code = "";

    for (let i = 0; i < day02Arr.length; i++) {
        for (let j = 0; j < day02Arr[i].length; j++) {
            const movement = day02Arr[i][j];
            
            switch (movement) {
                case "U":
                    if (startPoint[0] != 0) {
                        startPoint[0] -= 1;
                    }
                    break;
                case "R":
                    if (startPoint[1] != 2) {
                        startPoint[1] += 1;
                    }
                    break;
                case "D":
                    if (startPoint[0] != 2) {
                        startPoint[0] += 1;
                    }
                    break;
                case "L":
                    if (startPoint[1] != 0) {
                        startPoint[1] -= 1;
                    }
                    break;
                default:
                    break;
            }
        }

        code += keypad[startPoint[0]][startPoint[1]];
    }

    return code;
}

function day02Two() {
    let startPoint = [3, 1];
    let code = "";

    for (let i = 0; i < day02Arr.length; i++) {
        for (let j = 0; j < day02Arr[i].length; j++) {
            const movement = day02Arr[i][j];
            
            switch (movement) {
                case "U":
                    if (keypadTwo[startPoint[0] - 1][startPoint[1]] != false) {
                        startPoint[0] -= 1;
                    }
                    break;
                case "R":

                    if (keypadTwo[startPoint[0]][startPoint[1] + 1] != false) {
                        startPoint[1] += 1;
                    }
                    break;
                case "D":
                    if (keypadTwo[startPoint[0] + 1][startPoint[1]] != false) {
                        startPoint[0] += 1;
                    }
                    break;
                case "L":
                    if (keypadTwo[startPoint[0]][startPoint[1] - 1] != false) {
                        startPoint[1] -= 1;
                    }
                    break;
                default:
                    break;
            }
        }

        code += keypadTwo[startPoint[0]][startPoint[1]];
    }

    return code;
}

console.log(`Part one's answer is: ${day02()}`);
console.log(`Part two's answer is: ${day02Two()}`);