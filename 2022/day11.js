console.log("Day 11");

const day11Arr = `Monkey 0:
Starting items: 66, 59, 64, 51
Operation: new = old * 3
Test: divisible by 2
If true: throw to monkey 1
If false: throw to monkey 4

Monkey 1:
Starting items: 67, 61
Operation: new = old * 19
Test: divisible by 7
If true: throw to monkey 3
If false: throw to monkey 5

Monkey 2:
Starting items: 86, 93, 80, 70, 71, 81, 56
Operation: new = old + 2
Test: divisible by 11
If true: throw to monkey 4
If false: throw to monkey 0

Monkey 3:
Starting items: 94
Operation: new = old * old
Test: divisible by 19
If true: throw to monkey 7
If false: throw to monkey 6

Monkey 4:
Starting items: 71, 92, 64
Operation: new = old + 8
Test: divisible by 3
If true: throw to monkey 5
If false: throw to monkey 1

Monkey 5:
Starting items: 58, 81, 92, 75, 56
Operation: new = old + 6
Test: divisible by 5
If true: throw to monkey 3
If false: throw to monkey 6

Monkey 6:
Starting items: 82, 98, 77, 94, 86, 81
Operation: new = old + 7
Test: divisible by 17
If true: throw to monkey 7
If false: throw to monkey 2

Monkey 7:
Starting items: 54, 95, 70, 93, 88, 93, 63, 50
Operation: new = old + 4
Test: divisible by 13
If true: throw to monkey 2
If false: throw to monkey 0`;

function day11(input, rounds, partTwo) {
    input = input.split('\n\n').map(x => x.split('\n').map(y => y.split(': ')));

    let monkeys = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}};

    for (let a = 0; a < input.length; a++) {
        const ID = Number(input[a][0][0][7]);
        
        monkeys[ID]['items'] = input[a][1][1].split(', ').map(x => Number(x));
        monkeys[ID]['operation'] = input[a][2][1].slice(10).replace(' old', '');
        monkeys[ID]['test'] = Number(input[a][3][1].slice(13));
        monkeys[ID]['ifTrue'] = Number(input[a][4][1].slice(16));
        monkeys[ID]['ifFalse'] = Number(input[a][5][1].slice(16));
        monkeys[ID]['inspected'] = 0;
    }

    let lowestCommonMultiple = [];
    for (const key in monkeys) {
        if (Object.hasOwnProperty.call(monkeys, key)) {
            lowestCommonMultiple.push(monkeys[key].test)
        }
    }
    lowestCommonMultiple = lowestCommonMultiple.reduce((a, b) => a * b, 1);

    for (let b = 0; b < rounds; b++) {
        for (const key in monkeys) {
            if (Object.hasOwnProperty.call(monkeys, key)) {
                const monkey = monkeys[key];
                const itemLength = monkey.items.length;
                monkey.inspected += itemLength;

                for (let i = 0; i < itemLength; i++) {
                    if (monkey.operation.length == 1) {
                        let tempOne = eval(`${monkey.items[0]} ${monkey.operation} ${monkey.items[0]}`);
                        if (partTwo) {
                            monkey.items[0] = tempOne % lowestCommonMultiple;
                        } else {
                            monkey.items[0] = Math.floor(tempOne / 3);
                        }
                    } else {
                        let tempTwo = eval(`${monkey.items[0]} ${monkey.operation}`);
                        if (partTwo) {
                            monkey.items[0] = tempTwo % lowestCommonMultiple;
                        } else {
                            monkey.items[0] = Math.floor(tempTwo / 3);
                        }
                    }

                    if (monkey.items[0] % monkey.test == 0) {
                        monkeys[monkey.ifTrue].items.push(monkey.items.shift());
                    } else {
                        monkeys[monkey.ifFalse].items.push(monkey.items.shift());
                    }
                }
            }
        }
    }

    let inspectArr = [];
    for (const key in monkeys) {
        if (Object.hasOwnProperty.call(monkeys, key)) {
            inspectArr.push(monkeys[key].inspected);
        }
    }
    inspectArr.sort((a, b) => b - a);

    return (inspectArr[0] * inspectArr[1]);
}

console.log(`Part one's answer is: ${day11(day11Arr, 20)}`);

// console.log(`Part two's answer is: ${day11(day11Arr, 10000, true)}`);
console.log(`Part two's answer is: 18170818354`); // Little heavy (and long) so hardcoded answer