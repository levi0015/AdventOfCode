console.log("%cDay 15", 'color: #ff4400');

const day15Arr = `Sensor at x=3842919, y=126080: closest beacon is at x=3943893, y=1918172
Sensor at x=406527, y=2094318: closest beacon is at x=-1066, y=1333278
Sensor at x=2208821, y=3683408: closest beacon is at x=2914373, y=3062268
Sensor at x=39441, y=1251806: closest beacon is at x=-1066, y=1333278
Sensor at x=3093352, y=2404566: closest beacon is at x=2810772, y=2699609
Sensor at x=3645473, y=2234498: closest beacon is at x=3943893, y=1918172
Sensor at x=3645012, y=2995540: closest beacon is at x=4001806, y=2787325
Sensor at x=18039, y=3083937: closest beacon is at x=103421, y=3007511
Sensor at x=2375680, y=551123: closest beacon is at x=2761373, y=2000000
Sensor at x=776553, y=123250: closest beacon is at x=-1066, y=1333278
Sensor at x=2884996, y=2022644: closest beacon is at x=2761373, y=2000000
Sensor at x=1886537, y=2659379: closest beacon is at x=2810772, y=2699609
Sensor at x=3980015, y=3987237: closest beacon is at x=3844688, y=3570059
Sensor at x=3426483, y=3353349: closest beacon is at x=3844688, y=3570059
Sensor at x=999596, y=1165648: closest beacon is at x=-1066, y=1333278
Sensor at x=2518209, y=2287271: closest beacon is at x=2761373, y=2000000
Sensor at x=3982110, y=3262128: closest beacon is at x=3844688, y=3570059
Sensor at x=3412896, y=3999288: closest beacon is at x=3844688, y=3570059
Sensor at x=2716180, y=2798731: closest beacon is at x=2810772, y=2699609
Sensor at x=3575486, y=1273265: closest beacon is at x=3943893, y=1918172
Sensor at x=7606, y=2926795: closest beacon is at x=103421, y=3007511
Sensor at x=2719370, y=2062251: closest beacon is at x=2761373, y=2000000
Sensor at x=1603268, y=1771299: closest beacon is at x=2761373, y=2000000
Sensor at x=3999678, y=1864727: closest beacon is at x=3943893, y=1918172
Sensor at x=3157947, y=2833781: closest beacon is at x=2914373, y=3062268
Sensor at x=3904662, y=2601010: closest beacon is at x=4001806, y=2787325
Sensor at x=3846359, y=1608423: closest beacon is at x=3943893, y=1918172
Sensor at x=2831842, y=3562642: closest beacon is at x=2914373, y=3062268
Sensor at x=3157592, y=1874755: closest beacon is at x=2761373, y=2000000
Sensor at x=934300, y=2824967: closest beacon is at x=103421, y=3007511
Sensor at x=3986911, y=1907590: closest beacon is at x=3943893, y=1918172
Sensor at x=200888, y=3579976: closest beacon is at x=103421, y=3007511
Sensor at x=967209, y=3837958: closest beacon is at x=103421, y=3007511
Sensor at x=3998480, y=1972726: closest beacon is at x=3943893, y=1918172`;

// const day15Arr = `Sensor at x=2, y=18: closest beacon is at x=-2, y=15
// Sensor at x=9, y=16: closest beacon is at x=10, y=16
// Sensor at x=13, y=2: closest beacon is at x=15, y=3
// Sensor at x=12, y=14: closest beacon is at x=10, y=16
// Sensor at x=10, y=20: closest beacon is at x=10, y=16
// Sensor at x=14, y=17: closest beacon is at x=10, y=16
// Sensor at x=8, y=7: closest beacon is at x=2, y=10
// Sensor at x=2, y=0: closest beacon is at x=2, y=10
// Sensor at x=0, y=11: closest beacon is at x=2, y=10
// Sensor at x=20, y=14: closest beacon is at x=25, y=17
// Sensor at x=17, y=20: closest beacon is at x=21, y=22
// Sensor at x=16, y=7: closest beacon is at x=15, y=3
// Sensor at x=14, y=3: closest beacon is at x=15, y=3
// Sensor at x=20, y=1: closest beacon is at x=15, y=3`;

function day15(input, checkLine) {
    input = input.split('\n').map(x => x.split(' '));
    for (let a = 0; a < input.length; a++) {
        let sensor = input[a].slice(2, 4).map(x => x.slice(2, -1)).map(y => Number(y));
        let beacon = input[a].slice(8, 10).map(x => x.slice(2).replace(',', '')).map(y => Number(y));

        input[a] = [sensor, beacon];
    }

    let checkHorLine = checkLine;
    let beaconAtHorline = [];
    let noDisSignals = [];

    for (let i = 0; i < input.length; i++) {
        const sensor = input[i][0];
        const beacon = input[i][1];

        if (beacon[1] == checkHorLine) {
            beaconAtHorline.push([beacon[0], beacon[1]]);
        }

        const distance = ((sensor[0] > beacon[0]) ? (sensor[0] - beacon[0]) : (beacon[0] - sensor[0])) + ((sensor[1] > beacon[1]) ? (sensor[1] - beacon[1]) : (beacon[1] - sensor[1]));
        const distToLine = ((sensor[1] > checkHorLine) ? (sensor[1] - checkHorLine) : (checkHorLine - sensor[1]));
        let reachesHorLine = false;
        let lAndR = (distance - distToLine);

        if ((distance - distToLine) >= 0) {
            reachesHorLine = true;
        }

        if (reachesHorLine) {
            noDisSignals.push([sensor[0], checkHorLine]);
            if (lAndR >= 1) {
                for (let j = 1; j <= lAndR; j++) {
                    noDisSignals.push([sensor[0] + j, checkHorLine]);
                    noDisSignals.push([sensor[0] - j, checkHorLine]);
                }
            }
        }
    }

    noDisSignals = Array.from(new Set(noDisSignals.map(JSON.stringify)), JSON.parse);
    beaconAtHorline = Array.from(new Set(beaconAtHorline.map(JSON.stringify)), JSON.parse);
    
    for (let k = noDisSignals.length - 1; k >= 0; k--) {
        if (noDisSignals[k][0] == beaconAtHorline[0][0] && noDisSignals[k][1] == beaconAtHorline[0][1]) {
            noDisSignals.splice(k, 1);
        }
    }

    return noDisSignals.length;
}

function day15Two (input, mulX) {
    let minX = Infinity;
    let maxX = 0;
    let minY = Infinity;
    let maxY = 0;
    let xValue;

    input = input.split('\n').map(x => x.split(' '));
    for (let a = 0; a < input.length; a++) {
        let sensor = input[a].slice(2, 4).map(x => x.slice(2, -1)).map(y => Number(y));
        let beacon = input[a].slice(8, 10).map(x => x.slice(2).replace(',', '')).map(y => Number(y));

        input[a] = [sensor, beacon];

        minX = (sensor[0] < minX) ? sensor[0] : minX;
        minY = (sensor[1] < minY) ? sensor[1] : minY;
        maxX = (sensor[0] > maxX) ? sensor[0] : maxX;
        maxY = (sensor[1] > maxY) ? sensor[1] : maxY;
    }

    minX = Math.round(minX * 2);
    minY = Math.round(minY * 2);
    maxX = Math.round(maxX * 0.5);
    maxY = Math.round(maxY * 0.5);

    xValue = (minX * -1);
    let grid = [];
    for (let i = minY; i <= maxY; i++) {
        let row = [];
        for (let j = minX; j <= maxX; j++) {
            row.push('.');
        }
        grid.push(row);
    }

    for (let k = input.length - 1; k >= 0; k--) {
        const sensor = input[k][0];
        const beacon = input[k][1];

        grid[sensor[1]][sensor[0] + xValue] = 'S';
        if (beacon[0] <= maxX && beacon[0] >= minX && beacon[1] <= maxY && beacon[1] >= minY) {
            grid[beacon[1]][beacon[0] + xValue] = 'B';
        }
    }
    
    for (let l = 0; l < input.length; l++) {
        const sensor = input[l][0];
        const beacon = input[l][1];
        sensor[0] = sensor[0] + xValue;

        const distance = ((sensor[0] > beacon[0]) ? (sensor[0] - beacon[0]) : (beacon[0] - sensor[0])) + ((sensor[1] > beacon[1]) ? (sensor[1] - beacon[1]) : (beacon[1] - sensor[1]));
    
        for (let m = Math.max((sensor[1] - distance), minY); m <= Math.min((sensor[1] + distance), maxY); m++) {
            const distToLine = ((sensor[1] > m) ? (sensor[1] - m) : (m - sensor[1]));
            let lAndR = (distance - distToLine);
    
            if (m <= maxY && m >= minY && sensor[0] <= maxX && sensor[0] >= minX) {
                grid[m][sensor[0]] = (grid[m][sensor[0]] == '.') ? '#' : grid[m][sensor[0]];
            }
            if (lAndR >= 1) {
                for (let j = 1; j <= lAndR; j++) {
                    if (m <= maxY && m >= minY && (sensor[0] + j) <= maxX && (sensor[0] + j) >= minX) {
                        grid[m][sensor[0] + j] = (grid[m][sensor[0] + j] == '.') ? '#' : grid[m][sensor[0] + j];
                    }
                    if (m <= maxY && m >= minY && (sensor[0] - j) <= maxX && (sensor[0] - j) >= minX) {
                        grid[m][sensor[0] - j] = (grid[m][sensor[0] - j] == '.') ? '#' : grid[m][sensor[0] - j];
                    }
                }
            }
        }
    }

    let coor = [];

    for (let p = 0; p < grid.length; p++) {
        if (grid[p].includes('.')) {
            coor = [p, grid[p].indexOf('.')];
        }
    }

    console.log(coor)
}

// console.log(`Part one's answer is: ${day15(day15Arr, 2000000)}`);
// console.log(`Part two's answer is: ${day15Two(day15Arr, 4000000)}`);
// Very heavy, remake part 2 later

console.log(`Part one's answer is: 4748135`);
console.log(`Part two's answer is: null`);