console.log("Day 02");

const day02Arr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,5,19,23,1,23,5,27,1,27,13,31,1,31,5,35,1,9,35,39,2,13,39,43,1,43,10,47,1,47,13,51,2,10,51,55,1,55,5,59,1,59,5,63,1,63,13,67,1,13,67,71,1,71,10,75,1,6,75,79,1,6,79,83,2,10,83,87,1,87,5,91,1,5,91,95,2,95,10,99,1,9,99,103,1,103,13,107,2,10,107,111,2,13,111,115,1,6,115,119,1,119,10,123,2,9,123,127,2,127,9,131,1,131,10,135,1,135,2,139,1,10,139,0,99,2,0,14,0];
const day02ArrTwo = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,5,19,23,1,23,5,27,1,27,13,31,1,31,5,35,1,9,35,39,2,13,39,43,1,43,10,47,1,47,13,51,2,10,51,55,1,55,5,59,1,59,5,63,1,63,13,67,1,13,67,71,1,71,10,75,1,6,75,79,1,6,79,83,2,10,83,87,1,87,5,91,1,5,91,95,2,95,10,99,1,9,99,103,1,103,13,107,2,10,107,111,2,13,111,115,1,6,115,119,1,119,10,123,2,9,123,127,2,127,9,131,1,131,10,135,1,135,2,139,1,10,139,0,99,2,0,14,0];

function day02() {
    day02Arr[1] = 12;
    day02Arr[2] = 2;
    let answer;

    let i = 0;
    stop:
    while (i < day02Arr.length) {
        switch (day02Arr[i]) {
            case 1:
                day02Arr[day02Arr[i + 3]] = (day02Arr[day02Arr[i + 1]] + day02Arr[day02Arr[i + 2]]);
                i += 4;
                break;
            case 2:
                day02Arr[day02Arr[i + 3]] = (day02Arr[day02Arr[i + 1]] * day02Arr[day02Arr[i + 2]]);
                i += 4;
                break;
            case 99:
                answer = day02Arr[0];
                break stop;
            default:
                console.log("WHAT!!!")
                break stop;
        }
    }

    return answer;
}

function day02Two() {
    let arr = [...day02ArrTwo];
    const target = 19690720;

    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            arr[1] = i;
            arr[2] = j;
            let answer;

            let k = 0;

            stop:
            while (k < arr.length) {
                switch (arr[k]) {
                    case 1:
                        arr[arr[k + 3]] = (arr[arr[k + 1]] + arr[arr[k + 2]]);
                        k += 4;
                        break;
                    case 2:
                        arr[arr[k + 3]] = (arr[arr[k + 1]] * arr[arr[k + 2]]);
                        k += 4;
                        break;
                    case 99:
                        answer = arr[0];
                        break stop;
                    default:
                        console.log("WHAT!!!")
                        break stop;
                }
            }

            if (answer == target) {
                return (100 * i + j);
            }

            arr = [...day02ArrTwo];
        }
    }
}

console.log(`Part one's answer is: ${day02()}`);
console.log(`Part two's answer is: ${day02Two()}`);