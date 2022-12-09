console.log("Day 16");

const day16Arr = '10111100110001111';

function day16(diskLength) {
    let str = day16Arr;

    while (str.length < diskLength) {
        str = revNum(str);
    }

    str = str.substring(0, str.length - (str.length - diskLength))
    while (str.length % 2 == 0) {
        let newStr = '';
        for (let i = 0; i < str.length; i += 2) {
            if (str[i] == str[i + 1]) {
                newStr += '1';
            } else {
                newStr += '0';
            }
        }
        str = newStr;
    }
    
    return str;
}

function revNum(numToRev) {
    const startNum = numToRev;
    let revNum = '';
    for (let i = startNum.length - 1; i >= 0; i--) {
        if (startNum[i] == '0') {
            revNum += '1';
        } else {
            revNum += '0'
        }
    }
    return `${startNum}0${revNum}`;
}

console.log(`Part one's answer is: ${day16(272)}`);
console.log(`Part two's answer is: 10001101010000101`);
// console.log(`Part two's answer is: ${day16(35651584)}`);