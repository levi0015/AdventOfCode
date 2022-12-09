console.log("Day 13");
const day13Arr = [
    ["Me", 0, "Alice"], ["Me", 0, "Bob"], ["Me", 0, "Carol"], ["Me", 0, "David"], ["Me", 0, "Eric"], ["Me", 0, "Frank"], ["Me", 0, "George"], ["Me", 0, "Mallory"], ["Alice", -2, "Bob"], ["Alice", -62, "Carol"], ["Alice", 65, "David"], ["Alice", 21, "Eric"], ["Alice", -81, "Frank"], ["Alice", -4, "George"], ["Alice", -80, "Mallory"], ["Bob", 93, "Alice"], ["Bob", 19, "Carol"], ["Bob", 5, "David"], ["Bob", 49, "Eric"], ["Bob", 68, "Frank"], ["Bob", 23, "George"], ["Bob", 29, "Mallory"], ["Carol", -54, "Alice"], ["Carol", -70, "Bob"], ["Carol", -37, "David"], ["Carol", -46, "Eric"], ["Carol", 33, "Frank"], ["Carol", -35, "George"], ["Carol", 10, "Mallory"], ["David", 43, "Alice"], ["David", -96, "Bob"], ["David", -53, "Carol"], ["David", -30, "Eric"], ["David", -12, "Frank"], ["David", 75, "George"], ["David", -20, "Mallory"], ["Eric", 8, "Alice"], ["Eric", -89, "Bob"], ["Eric", -69, "Carol"], ["Eric", -34, "David"], ["Eric", 95, "Frank"], ["Eric", 34, "George"], ["Eric", -99, "Mallory"], ["Frank", -97, "Alice"], ["Frank", 6, "Bob"], ["Frank", -9, "Carol"], ["Frank", 56, "David"], ["Frank", -17, "Eric"], ["Frank", 18, "George"], ["Frank", -56, "Mallory"], ["George", 45, "Alice"], ["George", 76, "Bob"], ["George", 63, "Carol"], ["George", 54, "David"], ["George", 54, "Eric"], ["George", 30, "Frank"], ["George", 7, "Mallory"], ["Mallory", 31, "Alice"], ["Mallory", -32, "Bob"], ["Mallory", 95, "Carol"], ["Mallory", 91, "David"], ["Mallory", -66, "Eric"], ["Mallory", -75, "Frank"], ["Mallory", -99, "George"]
];
const day13ArrTwo = [];

function day13One() {
    const persons = ["Alice", "Bob", "Carol", "David", "Eric", "Frank", "George", "Mallory"];
    let highestHappiness = null;

    for (let b = 1; b < persons.length; b++) {
        for (let c = 1; c < persons.length; c++) {
            if (persons[c] != persons[b]) {
                for (let d = 1; d < persons.length; d++) {
                    if (persons[d] != persons[c] && persons[d] != persons[b]) {
                        for (let e = 1; e < persons.length; e++) {
                            if (persons[e] != persons[d] && persons[e] != persons[c] && persons[e] != persons[b]) {
                                for (let f = 1; f < persons.length; f++) {
                                    if (persons[f] != persons[e] && persons[f] != persons[d] && persons[f] != persons[c] && persons[f] != persons[b]) {
                                        for (let g = 1; g < persons.length; g++) {
                                            if (persons[g] != persons[f] && persons[g] != persons[e] && persons[g] != persons[d] && persons[g] != persons[c] && persons[g] != persons[b]) {
                                                for (let h = 1; h < persons.length; h++) {
                                                    if (persons[h] != persons[g] && persons[h] != persons[f] && persons[h] != persons[e] && persons[h] != persons[d] && persons[h] != persons[c] && persons[h] != persons[b]) {
                                                        const tableOrder = [persons[0], persons[b], persons[c], persons[d], persons[e], persons[f], persons[g], persons[h]];
                                                        let happiness = 0;

                                                        for (let i = 0; i < tableOrder.length; i++) {
                                                            let personA = tableOrder[i];
                                                            let personB = tableOrder[i + 1];

                                                            if (i == tableOrder.length - 1) {
                                                                personB = tableOrder[0]
                                                            }

                                                            for (let j = 0; j < day13Arr.length; j++) {
                                                                if ((day13Arr[j][0] == personA && day13Arr[j][2] == personB) || (day13Arr[j][0] == personB && day13Arr[j][2] == personA)) {
                                                                    happiness += day13Arr[j][1];
                                                                }
                                                            }
                                                        }

                                                        if (highestHappiness == null || happiness > highestHappiness) {
                                                            highestHappiness = happiness;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return highestHappiness;
}

function day13Two() {
    const persons = ["Alice", "Bob", "Carol", "David", "Eric", "Frank", "George", "Mallory", "Me"];
    let highestHappiness = null;

    for (let b = 1; b < persons.length; b++) {
        for (let c = 1; c < persons.length; c++) {
            if (persons[c] != persons[b]) {
                for (let d = 1; d < persons.length; d++) {
                    if (persons[d] != persons[c] && persons[d] != persons[b]) {
                        for (let e = 1; e < persons.length; e++) {
                            if (persons[e] != persons[d] && persons[e] != persons[c] && persons[e] != persons[b]) {
                                for (let f = 1; f < persons.length; f++) {
                                    if (persons[f] != persons[e] && persons[f] != persons[d] && persons[f] != persons[c] && persons[f] != persons[b]) {
                                        for (let g = 1; g < persons.length; g++) {
                                            if (persons[g] != persons[f] && persons[g] != persons[e] && persons[g] != persons[d] && persons[g] != persons[c] && persons[g] != persons[b]) {
                                                for (let h = 1; h < persons.length; h++) {
                                                    if (persons[h] != persons[g] && persons[h] != persons[f] && persons[h] != persons[e] && persons[h] != persons[d] && persons[h] != persons[c] && persons[h] != persons[b]) {
                                                        for (let m = 1; m < persons.length; m++) {
                                                            if (persons[m] != persons[h] && persons[m] != persons[g] && persons[m] != persons[f] && persons[m] != persons[e] && persons[m] != persons[d] && persons[m] != persons[c] && persons[m] != persons[b]) {
                                                                const tableOrder = [persons[0], persons[b], persons[c], persons[d], persons[e], persons[f], persons[g], persons[h], persons[m]];
                                                                let happiness = 0;

                                                                for (let i = 0; i < tableOrder.length; i++) {
                                                                    let personA = tableOrder[i];
                                                                    let personB = tableOrder[i + 1];

                                                                    if (i == tableOrder.length - 1) {
                                                                        personB = tableOrder[0]
                                                                    }

                                                                    for (let j = 0; j < day13Arr.length; j++) {
                                                                        if ((day13Arr[j][0] == personA && day13Arr[j][2] == personB) || (day13Arr[j][0] == personB && day13Arr[j][2] == personA)) {
                                                                            happiness += day13Arr[j][1];
                                                                        }
                                                                    }
                                                                }

                                                                if (highestHappiness == null || happiness > highestHappiness) {
                                                                    highestHappiness = happiness;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return highestHappiness;
}

console.log(`Part one's answer is: ${day13One()}`);
console.log(`Part two's answer is: ${day13Two()}`);