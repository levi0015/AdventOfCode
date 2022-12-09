console.log("Day 04");

const day04Range = [271973, 785961];
// const day04Range = [111121, 111123];
// const day04ArrTwo = [];

function day04(partTwo) {
    let pass = [];
    let passTwo = [];

    test:
    for (let i = day04Range[0]; i <= day04Range[1]; i++) {
        if (partTwo) {
            let validNum = false;
            let num = `${i}`;

            for (let j = 0; j < num.length - 1; j++) {
                if (num[j] == num[j + 1]) {
                    if (num[j + 1] != num[j + 2] && num[j] != num[j - 1]) {
                        validNum = true;
                    }
                }
                if (num[j] > num[j + 1]) {
                    continue test;
                }
            }

            if (validNum) {
                passTwo.push(num);
            }

        } else {
            let validNum = false;
            let num = `${i}`;

            for (let j = 0; j < num.length - 1; j++) {
                if (num[j] == num[j + 1]) {
                    validNum = true;
                }
                if (num[j] > num[j + 1]) {
                    continue test;
                }
            }

            if (validNum) {
                pass.push(num);
            }
        }
    }

    return [pass.length, passTwo.length];
}

function day04Two() {

}

console.log(`Part one's answer is: ${day04()[0]}`);
console.log(`Part two's answer is: ${day04(true)[1]}`);