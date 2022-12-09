console.log("Day 24");

let day24Arr = [1, 2, 3, 5, 7, 13, 17, 19, 23, 29, 31, 37, 41, 43, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
let total = day24Arr.reduce((a, b) => a + b);

function day24One() {
    let groups = makeGroups(total / 3, day24Arr);
    groups.sort(groupSort);

    let answer = null;
    for (let i = 0; i < groups.length && !answer; i++) {
        let group = groups[i];
        let remainder = day24Arr.filter(p => group.indexOf(p) === -1);
        if (makeGroups(total / 3, remainder).length)
            answer = group.reduce((a, b) => a * b, 1);
    }

    return answer;
}

function day24Two() {
    let groups = makeGroups(total / 4, day24Arr);
    groups.sort(groupSort);

    let answer = null;
    for (let i = 0; i < groups.length && !answer; i++) {
        let group = groups[i];
        let remainder = day24Arr.filter(p => group.indexOf(p) === -1);
        let subGroups
        if ((subGroups = makeGroups(total / 4, remainder)) && subGroups.length) {
            for (let j = 0; j < subGroups.length; j++) {
                let subGroup = subGroups[j];
                let subRemainder = day24Arr.filter(p => group.indexOf(p) === -1 && subGroup.indexOf(p) === -1);
                if (makeGroups(total / 4, subRemainder).length)
                    answer = group.reduce((a, b) => a * b, 1);
            }
        }
    }

    return answer;
}

function makeGroups(total, arr, lastIdx) {
	let allGroups = [];
	lastIdx = lastIdx === undefined ? arr.length - 1 : lastIdx;

	for (let i = lastIdx; i >= 0; i--) {
		if (total - arr[i] === 0) {
			allGroups.push([arr[i]]);
		} else if (total - arr[i] > 0) {
			let subGroups = makeGroups(total - arr[i], arr, i - 1);
			for (let j = 0; j < subGroups.length; j++) {
				subGroups[j].push(arr[i]);
			}
			allGroups = allGroups.concat(subGroups);
		}
	}

	// Sort and dedupe
	if (!allGroups.length)
		return allGroups;

	let shortest = allGroups.reduce((p, i) => Math.min(p, i.length), Infinity);
	return allGroups.map(a => a.sort((a, b) => a - b)).filter((a, i) => {
		if (a.length !== shortest)
			return false;
		return !(allGroups.find((f, fi) => i > fi && a.toString() === f.toString()));
	});
}

function groupSort(a, b) {
	if (a.length === b.length) {
		return a.reduce((a, b) => a * b, 1) - b.reduce((a, b) => a * b, 1);
	} else {
		return a.length - b.length;
	}
}

console.log(`Part one's answer is: ${day24One()}`);
console.log(`Part two's answer is: ${day24Two()}`);