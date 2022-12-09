console.log("Day 14");

const day14Arr = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

function day14(input, steps) {
    input = input.split('\n');
    
    let molecule = input[0];
    let registers = {};
    let counts = {};

    input = input.slice(2).map(x => x.split(' -> '));
    for (let i = 0; i < input.length; i++) {
        registers[input[i][0]] = input[i][1];
    }

    for (let j = 0; j < steps; j++) {
        let newMolecule = '';

        for (let k = 0; k < molecule.length - 1; k++) {
            newMolecule += molecule[k];
            newMolecule += registers[`${molecule[k]}${molecule[k + 1]}`];

            if (k == molecule.length - 2) {
                newMolecule += molecule[k + 1];
            }
        }

        molecule = newMolecule;
    }

    for (let l = 0; l < molecule.length; l++) {
        if (counts[molecule[l]] == undefined) {
            counts[molecule[l]] = 1;
        } else {
            counts[molecule[l]]++;
        }
    }

    let highNum = 0;
    let lowNum = Infinity;

    for (const key in counts) {
        if (Object.hasOwnProperty.call(counts, key)) {
            highNum = (counts[key] > highNum) ? counts[key] : highNum;
            lowNum = (counts[key] < lowNum) ? counts[key] : lowNum;
        }
    }

    return (highNum - lowNum);
}

console.log(`Part one's answer is: ${day14(day14Arr, 10)}`);