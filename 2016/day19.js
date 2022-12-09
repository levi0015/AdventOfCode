console.log("Day 19");

const day19Num = 3017957;
const day19NumTwo = 100;

function day19() {
    let num = 0;
    while (true) {
        let length = 0;
        let nextLength = 0;
        for (let i = 0; i <= num; i++) {
            length += 2**i;
            nextLength = i;
        }
        nextLength = (length + 2**(nextLength + 1));

        if (day19Num >= length && day19Num <= nextLength) {
            let oddIndex = day19Num - length;
            let answer = 1;
            for (let j = 1; j < oddIndex; j++) {
                answer += 2;
            }
            return answer;
        }

        num++;
    }
}

function day19Two() {
    let wins = [];

    test:
    for (let h = 3; h <= day19NumTwo; h++) {
        let elves = [];
        for (let i = 1; i <= h; i++) {
            elves.push(i);
        }

        while (true) {
            let removeIndex;
            if (elves.length % 2 == 1) {
                removeIndex = elves[Math.floor(elves.length / 2)];
            } else {
                removeIndex = elves[elves.length / 2];
            }

            elves = elves.filter(item => { return item != removeIndex; });

            if (elves.length == 2) {
                // wins.push([h, elves[1]]);
                wins.push(elves[1]);
                continue test;
            }

            elves.push(elves.shift());
        }
    }
    console.log(wins);
}

function testing() {
    let wins = [];

    test:
    for (let h = 1; h <= day19NumTwo; h++) {
        let elves = [];
        for (let i = 1; i <= h; i++) {
            elves.push(i);
        }

        let removeElves = [];

        while (elves.length > 2) {
            for (let j = 0; j < elves.length; j++) {
                if (j % 2 == 1) {
                    removeElves.push(elves[j]);
                }
            }
            if (elves.length % 2 == 1) {
                removeElves.push(elves[0]);
            }

            elves = elves.filter(item => !removeElves.includes(item))
        }

        wins.push(elves[0])
    }
    console.log(wins);
}

console.log(`Part one's answer is: ${day19()}`);
// console.log(`Part two's answer is: ${day19Two()}`);
// console.log(`Part two's answer is: ${testing()}`);