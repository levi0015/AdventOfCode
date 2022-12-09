console.log("Day 23");

const day23Arr = `set b 67
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

function day23(input, part) {
    input = input.split('\n').map(str => str.split(' '));
    let registers = {a: part, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0};
    let mulCount = 0;

    let j = 0;
    test:
    while (j < input.length) {
        const key = input[j][0];
        const x = input[j][1];
        let y;
        if (isNaN(input[j][2])) {
            y = Number(registers[input[j][2]]);
        } else {
            y = input[j][2];
        }
        y = Number(y);

        switch (key) {
            case "set":
                registers[x] = y;
                j++;
                break;
            case "sub":
                registers[x] -= y;
                j++;
                break;
            case "mul":
                registers[x] *= y;
                mulCount++;
                j++;
                break;
            case "jnz":
                if (isNaN(x)) {
                    if (registers[x] != 0) {
                        j += y;
                    } else {
                        j++;
                    }
                } else {
                    if (x != 0) {
                        j += y;
                    } else {
                        j++;
                    }
                }
                break;
            default:
                break;
        }
    }

    return mulCount;    
}

console.log(`Part one's answer is: ${day23(day23Arr, 0)}`);
// console.log(`Part two's answer is: ${day23(day23Arr, 1)}`);