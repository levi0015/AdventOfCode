console.log("Day 01");

const day01Arr = [129880,115705,118585,124631,81050,138183,61173,95354,130788,89082,75554,110104,140528,71783,125889,126602,73089,76822,51774,85940,81004,149584,145921,105570,142370,80823,147779,115651,70250,67763,128192,51298,134963,73510,90976,141216,65134,140468,143998,101711,88477,53335,138328,141186,149804,64950,53107,54648,97557,85927,125038,80514,64912,140591,114229,57089,123464,127572,137169,146550,51138,115504,128034,147244,108107,101205,51498,136829,140171,59441,144489,139384,145841,96771,116821,88599,126780,65012,67621,129699,149639,97590,147527,117462,146709,60527,107643,92956,72177,92285,62475,63099,66904,77268,62945,134364,106924,117842,130016,123712];
const day01ArrTwo = [129880,115705,118585,124631,81050,138183,61173,95354,130788,89082,75554,110104,140528,71783,125889,126602,73089,76822,51774,85940,81004,149584,145921,105570,142370,80823,147779,115651,70250,67763,128192,51298,134963,73510,90976,141216,65134,140468,143998,101711,88477,53335,138328,141186,149804,64950,53107,54648,97557,85927,125038,80514,64912,140591,114229,57089,123464,127572,137169,146550,51138,115504,128034,147244,108107,101205,51498,136829,140171,59441,144489,139384,145841,96771,116821,88599,126780,65012,67621,129699,149639,97590,147527,117462,146709,60527,107643,92956,72177,92285,62475,63099,66904,77268,62945,134364,106924,117842,130016,123712];
const testArr = [12, 14, 1969, 100756];

function day01() {
    day01Arr[0] = (Math.floor(day01Arr[0] / 3) - 2);
    let sum = day01Arr.reduce((a, b) => a + (Math.floor(b / 3) - 2));

    return sum;
}

function day01Two() {
    let sum = 0;
    for (let i = 0; i < day01ArrTwo.length; i++) {
        let fuels = [];
        fuels.push(Math.floor(day01ArrTwo[i] / 3) - 2);

        while (fuels[fuels.length - 1] >= 9) {
            fuels.push(Math.floor(fuels[fuels.length - 1] / 3) - 2);
        }
        
        sum += fuels.reduce((a, b) => a + b, 0);
    }
    return sum;
}

console.log(`Part one's answer is: ${day01()}`);
console.log(`Part two's answer is: ${day01Two()}`);