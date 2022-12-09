console.log("Day 20");

const day20num = 33100000;

function day20() {
    let presents = [];
    let presentsTwo = [];

    for (let e = 1; e < day20num / 10; e++) {
        let visits = 0;
        for (let i = e; i < day20num / 10; i = i + e) {
            if (!presents[i]) {
                presents[i] = 10;
            } else {
                presents[i] = presents[i] + e * 10;
            }

            if (visits < 50) {
                if (!presentsTwo[i]) {
                    presentsTwo[i] = 11;
                } else {
                    presentsTwo[i] = presentsTwo[i] + e * 11;
                    visits = visits + 1;
                }
            }
        }
    }
    let ansOne = presents.reduce((min, current, index) => (min === 0 && current >= day20num) ? min = index : min, 0);
    let ansTwo = presentsTwo.reduce((min, current, index) => (min === 0 && current >= day20num) ? min = index : min, 0);

    return [ansOne, ansTwo]
}

// function day20Two() {
    
// }

console.log(`Part one's answer is: ${day20()[0]}`);
console.log(`Part two's answer is: ${day20()[1]}`);