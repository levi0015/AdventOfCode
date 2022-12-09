console.log("Day 14");
const day14Arr = [
    [22, 8, 165],
    [8, 17, 114],
    [18, 6, 103],
    [25, 6, 145],
    [11, 12, 125],
    [21, 6, 121],
    [18, 3, 50],
    [20, 4, 75],
    [7, 20, 119]
];
const day14ArrTwo = [
    // Rudolph, Cupid, Prancer, Donner, Dasher, Comet, Blitzen, Vixen, Dancer
    {
        "speed": 22,
        "flyTime": 8,
        "restTime": 165,
        "timer": 8,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 8,
        "flyTime": 17,
        "restTime": 114,
        "timer": 17,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 18,
        "flyTime": 6,
        "restTime": 103,
        "timer": 6,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 25,
        "flyTime": 6,
        "restTime": 145,
        "timer": 6,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 11,
        "flyTime": 12,
        "restTime": 125,
        "timer": 12,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 21,
        "flyTime": 6,
        "restTime": 121,
        "timer": 6,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 18,
        "flyTime": 3,
        "restTime": 50,
        "timer": 3,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 20,
        "flyTime": 4,
        "restTime": 75,
        "timer": 4,
        "isFlying": true,
        "distance": 0,
        "points": 0
    },
    {
        "speed": 7,
        "flyTime": 20,
        "restTime": 119,
        "timer": 20,
        "isFlying": true,
        "distance": 0,
        "points": 0
    }
];

function day14One() {
    const time = 2503;
    let distances = [];

    for (let i = 0; i < day14Arr.length; i++)
    {
        const sectionTime = day14Arr[i][1] + day14Arr[i][2];
        const totalSectionDist = day14Arr[i][0] * day14Arr[i][1];
        
        day14Arr[i].push((Math.floor(time / sectionTime) * totalSectionDist) + (Math.min(time % sectionTime, day14Arr[i][1]) * day14Arr[i][0]));
    }

    for (let j = 0; j < day14Arr.length; j++)
    {
        distances.push(day14Arr[j][3])
    }

    return (Math.max(...distances));
}

function day14Two() {
    const time = 2503;
    let points = [];

    for (let i = 0; i < time; i++)
    {
        let distances = [];

        // does the reindeer update per second (updates timer, add distances, updates state, add distance to array)
        day14ArrTwo.forEach(reindeer =>
        {
            reindeer.timer--;

            if (reindeer.isFlying)
            {
                reindeer.distance += reindeer.speed;
            }

            if (reindeer.timer == 0 && reindeer.isFlying)
            {
                reindeer.timer = reindeer.restTime;
                reindeer.isFlying = !reindeer.isFlying;
            } else if (reindeer.timer == 0 && !reindeer.isFlying)
            {
                reindeer.timer = reindeer.flyTime;
                reindeer.isFlying = !reindeer.isFlying;
            }

            distances.push(reindeer.distance);
        });

        day14ArrTwo[distances.indexOf(Math.max(...distances))].points++;
    }

    day14ArrTwo.forEach(reindeer =>
    {
        points.push(reindeer.points);
    });

    // console.log(day14ArrTwo[points.indexOf(Math.max(...points))]);
    return Math.max(...points);
}

console.log(`Part one's answer is: ${day14One()}`);
console.log(`Part two's answer is: ${day14Two()}`);