console.log("Day 21");

const day21Arr = [
    // weapons
    [
        ["Dagger", 8, 4, 0],
        ["Shortsword", 10, 5, 0],
        ["Warhammer", 25, 6, 0],
        ["Longsword", 40, 7, 0],
        ["Greataxe", 74, 8, 0]
    ],

    // armor
    [
        ["Leather", 13, 0, 1],
        ["Chainmail", 31, 0, 2],
        ["Splintmail", 53, 0, 3],
        ["Bandedmail", 75, 0, 4],
        ["Platemail", 102, 0, 5],
        ["None", 0, 0, 0]
    ],

    // rings
    [
        ["Damage +1", 25, 1, 0],
        ["Damage +2", 50, 2, 0],
        ["Damage +3", 100, 3, 0],
        ["Defense +1", 20, 0, 1],
        ["Defense +2", 40, 0, 2],
        ["Defense +3", 80, 0, 3],
        ["None", 0, 0, 0],
        ["None", 0, 0, 0]
    ]
];

function day21() {
    const weapons = day21Arr[0];
    const armors = day21Arr[1];
    const rings = day21Arr[2];

    let winPossibilities = [];
    let losePossibilities = [];

    for (let i = 0; i < weapons.length; i++) {
        for (let j = 0; j < armors.length; j++) {
            for (let k = 0; k < rings.length; k++) {
                for (let l = 0; l < rings.length; l++) {
                    if (l == k) {
                        continue;
                    }

                    const weapon = weapons[i];
                    const armor = armors[j];
                    const ringOne = rings[k];
                    const ringTwo = rings[l];

                    const cost = weapon[1] + armor[1] + ringOne[1] + ringTwo[1];
                    const dmg = weapon[2] + ringOne[2] + ringTwo[2];
                    const arm = armor[3] + ringOne[3] + ringTwo[3];
                    
                    // hp, dmg, armor
                    const boss = [104, 8, 1];
                    const me = [100, dmg, arm];
                    
                    let isPersonDown = false;
                    while (!isPersonDown) {
                        // player hits
                        // console.log(`The player deals ${me[1]}-${boss[2]} = ${me[1] - boss[2]} damage; the boss goes down to ${boss[0] - (me[1] - boss[2])} hit points`);
                        let pDmg = me[1] - boss[2];
                        boss[0] -= Math.max(pDmg, 1);

                        if (boss[0] <= 0) {
                            // console.log(`Player wins!`);
                            isPersonDown = true;
                            winPossibilities.push(cost);
                            break;
                        }

                        // enemy hits
                        // console.log(`The boss deals ${boss[1]}-${me[2]} = ${boss[1] - me[2]} damage; the player goes down to ${me[0] - (boss[1] - me[2])} hit points`);
                        let bDmg = boss[1] - me[2];
                        me[0] -= Math.max(bDmg, 1);

                        if (me[0] <= 0) {
                            // console.log(`Enemy wins!`);
                            isPersonDown = true;
                            losePossibilities.push(cost);
                            break;
                        }
                    }



                }
            }
        }
    }
    // const boss = [20, 7, 2];
    // const me = [8, 5, 5];

    return [Math.min(...winPossibilities), Math.max(...losePossibilities)];
}

console.log(`Part one's answer is: ${day21()[0]}`);
console.log(`Part two's answer is: ${day21()[1]}`);