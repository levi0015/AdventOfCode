console.log("Day 25");

function day25() {
    let slot = 0;
    let stream = [];
    let state = 'A';
    let steps = 12481997;
    let chksm = 0;

    let write = (val) => {
        chksm += val - (stream[slot] || 0);
        stream[slot] = val;
    }

    for (let i = 0; i < steps; i++) {
        let current = stream[slot];
        switch (state) {
            case 'A':
                if (!current) {
                    write(1), slot++, state = 'B';
                } else {
                    write(0), slot--, state = 'C';
                }
                break;
            case 'B':
                if (!current) {
                    write(1), slot--, state = 'A';
                } else {
                    write(1), slot++, state = 'D';
                }
                break;
            case 'C':
                if (!current) {
                    write(0), slot--, state = 'B';
                } else {
                    write(0), slot--, state = 'E';
                }
                break;
            case 'D':
                if (!current) {
                    write(1), slot++, state = 'A';
                } else {
                    write(0), slot++, state = 'B';
                }
                break;
            case 'E':
                if (!current) {
                    write(1), slot--, state = 'F';
                } else {
                    write(1), slot--, state = 'C';
                }
                break;
            case 'F':
                if (!current) {
                    write(1), slot++, state = 'D';
                } else {
                    write(1), slot++, state = 'A';
                }
                break;
            default:
                break;
        }
    }
    
    return chksm;
}

console.log(`Part two's answer is: ${day25()}`);