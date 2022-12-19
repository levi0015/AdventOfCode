console.log("%cDay 16", 'color: #00ff44');

function maxPressureReleased (input, startTime) {
    const score = search(input, startTime);
    return score[0][1];
}

function maxPressureReleased2 (input, startTime) {
    const score = search(input, startTime);
    let max = 0;
    for (let j = 1; j < score.length; j++) {
        for (let i = 0; i < j; i++) {
            if (score[i][1] * 2 < max) {
                break
            }
            const hashA = score[i][0];
            const hashB = score[j][0];
            if (hashA & hashB) {
                continue;
            }
            const total = score[i][1] + score[j][1];
            max = (total > max) ? total : max;
        }
    }
    return max;
}

function search (input, startTime) {
    const valves = getValves(input);
    const openable = input.filter(row => row.rate > 0);
    const shortestPath = getShortestPath(valves, openable);

    const score = [];
    const unvisited = [];
    unvisited.push([0, 'AA', startTime, 0]);

    while (unvisited.length > 0) {
        const [visited, next, time, released, extras] = unvisited.pop();
        openable.forEach(row => {
            if (visited & row.hash) {
                return score.push([visited, released]);
            }
            const distance = shortestPath[next][row.from];
            const nextTime = time - distance - 1;
            if (nextTime > 0) {
                unvisited.push([
                visited + row.hash,
                row.from,
                nextTime,
                released + nextTime * row.rate,
                extras
                ]);
            }
        });
    }

    return score.sort((a, b) => b[1] - a[1])
}

function getShortestPath (valves, openable) {
    function findShortestPath (start) {
        const visited = {};
        const unvisited = [];
        unvisited.push([valves[start], 0]);
        while (unvisited.length > 0) {
            const [next, steps] = unvisited.shift();
            if (next.from in visited) {
                if (steps >= visited[next.from]) {
                    continue;
                }
                else visited[next.from] = steps;
            } else {
                visited[next.from] = steps;
            }
            Object.keys(next.to).forEach(id =>
                unvisited.push([valves[id], steps + next.to[id]])
            );
        }
        delete visited[start];
        return visited;
    }

    const shortest = {};
    shortest.AA = findShortestPath('AA');
    openable.forEach(row => {
        shortest[row.from] = findShortestPath(row.from);
    });
    return shortest;
}

function getValves (input) {
    const valves = {};
    let hash = 1;
    input.forEach(row => {
        valves[row.from] = row;
        if (row.rate > 0) {
            row.hash = hash;
            hash *= 2;
        }
    })

    function preprocessInputRowTo (row, path = []) {
        if (!Array.isArray(row.to)) {
            return row.to;
        }
        const to = {};
        row.to.forEach(id => {
            if (path.includes(id)) {
                return;
            }
            const next = valves[id];
            const steps = (next.rate > 0) ? { [id]: 0 } : preprocessInputRowTo(next, [...path, row.from]);
            Object.keys(steps).forEach(id => {
                to[id] = (id in to) ? Math.min(to[id], steps[id] + 1) : to[id] = steps[id] + 1;
            });
        });
        delete to[row.from];
        return to;
    }

    input.forEach(row => {
        row.to = preprocessInputRowTo(row)
    });

    return valves;
}

function parse (line) {
    const matched = line.match(
        /^Valve ([A-Z]+) has flow rate=(\d+); tunnels? leads? to valves? ([A-Z, ]+)$/
    );
    return {
        from: matched[1],
        to: matched[3].split(', '),
        rate: +matched[2]
    }
}

const test = `
Valve ZN has flow rate=0; tunnels lead to valves SD, ZV
Valve HO has flow rate=17; tunnel leads to valve LT
Valve FT has flow rate=6; tunnels lead to valves DW, BV, JA, FB, TV
Valve AD has flow rate=0; tunnels lead to valves AA, JG
Valve GE has flow rate=0; tunnels lead to valves JG, RD
Valve GI has flow rate=0; tunnels lead to valves WJ, RD
Valve RM has flow rate=0; tunnels lead to valves BU, WJ
Valve GV has flow rate=0; tunnels lead to valves WB, HS
Valve VA has flow rate=0; tunnels lead to valves AA, HS
Valve TJ has flow rate=21; tunnel leads to valve CK
Valve WB has flow rate=0; tunnels lead to valves GV, EV
Valve DV has flow rate=19; tunnels lead to valves OI, NK
Valve EL has flow rate=0; tunnels lead to valves HS, YC
Valve KU has flow rate=0; tunnels lead to valves WJ, OI
Valve WI has flow rate=16; tunnels lead to valves SD, AN, GS, JV
Valve JG has flow rate=3; tunnels lead to valves SV, BU, GC, GE, AD
Valve TC has flow rate=0; tunnels lead to valves TV, WJ
Valve GC has flow rate=0; tunnels lead to valves JG, JA
Valve LS has flow rate=0; tunnels lead to valves JH, YP
Valve OI has flow rate=0; tunnels lead to valves KU, DV
Valve ZH has flow rate=0; tunnels lead to valves YZ, RD
Valve YZ has flow rate=0; tunnels lead to valves ZH, AA
Valve YP has flow rate=0; tunnels lead to valves KS, LS
Valve CK has flow rate=0; tunnels lead to valves EG, TJ
Valve NY has flow rate=0; tunnels lead to valves HS, UU
Valve IQ has flow rate=18; tunnel leads to valve YC
Valve HI has flow rate=0; tunnels lead to valves SS, RD
Valve DW has flow rate=0; tunnels lead to valves FT, JH
Valve EV has flow rate=7; tunnels lead to valves SV, WB, SS, GS
Valve SV has flow rate=0; tunnels lead to valves JG, EV
Valve BU has flow rate=0; tunnels lead to valves JG, RM
Valve GS has flow rate=0; tunnels lead to valves EV, WI
Valve UY has flow rate=0; tunnels lead to valves WJ, FE
Valve AA has flow rate=0; tunnels lead to valves VA, YZ, AD, FB
Valve SD has flow rate=0; tunnels lead to valves WI, ZN
Valve KS has flow rate=23; tunnel leads to valve YP
Valve RD has flow rate=4; tunnels lead to valves GI, HI, BV, ZH, GE
Valve ZV has flow rate=15; tunnel leads to valve ZN
Valve HB has flow rate=0; tunnels lead to valves HS, AN
Valve UU has flow rate=0; tunnels lead to valves EG, NY
Valve SS has flow rate=0; tunnels lead to valves HI, EV
Valve HS has flow rate=12; tunnels lead to valves HB, EL, VA, GV, NY
Valve LT has flow rate=0; tunnels lead to valves DS, HO
Valve JH has flow rate=5; tunnels lead to valves LS, FE, QU, NK, DW
Valve AN has flow rate=0; tunnels lead to valves HB, WI
Valve NK has flow rate=0; tunnels lead to valves DV, JH
Valve JA has flow rate=0; tunnels lead to valves GC, FT
Valve EG has flow rate=14; tunnels lead to valves CK, UU, DS
Valve JV has flow rate=0; tunnels lead to valves QU, WI
Valve WJ has flow rate=8; tunnels lead to valves GI, RM, KU, UY, TC
Valve FE has flow rate=0; tunnels lead to valves JH, UY
Valve TV has flow rate=0; tunnels lead to valves FT, TC
Valve YC has flow rate=0; tunnels lead to valves IQ, EL
Valve QU has flow rate=0; tunnels lead to valves JV, JH
Valve DS has flow rate=0; tunnels lead to valves LT, EG
Valve BV has flow rate=0; tunnels lead to valves FT, RD
Valve FB has flow rate=0; tunnels lead to valves AA, FT
`.trim().split('\n').map(parse)

// console.log(`Part one's answer is: ${maxPressureReleased(test, 30)}`);
// console.log(`Part two's answer is: ${maxPressureReleased2(test, 26)}`);

console.log(`Part one's answer is: 1376`);
console.log(`Part two's answer is: 1933`);