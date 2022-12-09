console.log("Day 12");

let day12Arr = `cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 18 c
cpy 11 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

function day12(input, part, i = -1) {
    const registers = { a: 0, b: 0, c: part, d: 0 }
    const instructions = {
        cpy: (x, y) => registers[y] = isNaN(x) ? registers[x] : parseInt(x),
        inc: x => ++registers[x],
        dec: x => --registers[x],
        jnz: (x, y) => i = registers[x] != 0 ? parseInt(y) + i - 1 : i
    }
    
    input = input.split('\n').map(str => str.split(' '));
    
    while (++i < input.length) instructions[input[i][0]](input[i][1], input[i][2]);

    return registers.a;
}

console.log(`Part one's answer is: ${day12(day12Arr, 0)}`);
console.log(`Part two's answer is: ${day12(day12Arr, 1)}`);