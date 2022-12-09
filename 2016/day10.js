console.log("Day 10");

const day10Arr = [["bot",123,"bot",191,"bot",162],["bot",191,"output",9,"bot",192],["bot",182,"bot",175,"bot",196],["bot",113,"bot",172,"bot",94],["bot",78,"bot",37,"bot",25],["bot",187,"bot",125,"bot",45],["bot",71,"bot",108,"bot",61],["bot",154,"bot",2,"bot",64],["bot",142,"bot",110,"bot",163],["bot",109,"output",0,"bot",43],["bot",198,"bot",101,"bot",52],["bot",138,"bot",9,"bot",47],["value",5,189],["bot",179,"bot",176,"bot",14],["bot",115,"bot",82,"bot",181],["bot",101,"bot",90,"bot",5],["bot",9,"output",5,"bot",149],["bot",181,"bot",0,"bot",27],["bot",119,"bot",207,"bot",65],["bot",202,"bot",69,"bot",154],["bot",100,"bot",206,"bot",169],["bot",72,"bot",205,"bot",12],["bot",146,"bot",8,"bot",106],["bot",58,"bot",180,"bot",123],["value",37,1],["value",61,144],["bot",205,"bot",169,"bot",3],["bot",91,"bot",76,"bot",84],["bot",93,"bot",122,"bot",100],["bot",76,"bot",147,"bot",89],["bot",102,"bot",11,"bot",23],["bot",43,"output",11,"output",12],["bot",128,"bot",15,"bot",85],["bot",137,"bot",112,"bot",2],["bot",88,"bot",103,"bot",55],["bot",162,"bot",192,"bot",141],["bot",183,"bot",49,"bot",81],["bot",127,"bot",113,"bot",207],["value",11,165],["bot",28,"bot",62,"bot",42],["bot",95,"bot",42,"bot",32],["bot",50,"bot",160,"bot",194],["bot",68,"bot",133,"bot",142],["bot",20,"bot",208,"bot",203],["bot",178,"bot",182,"bot",54],["bot",120,"bot",102,"bot",99],["bot",131,"bot",67,"bot",83],["bot",21,"bot",111,"bot",69],["bot",27,"bot",46,"bot",193],["bot",98,"bot",63,"bot",22],["value",13,7],["bot",121,"bot",155,"bot",146],["bot",41,"bot",153,"bot",53],["bot",75,"bot",100,"bot",205],["value",43,4],["bot",206,"bot",151,"bot",77],["bot",0,"bot",95,"bot",46],["bot",208,"output",14,"bot",126],["bot",40,"bot",187,"bot",184],["bot",184,"bot",45,"bot",124],["bot",60,"bot",188,"bot",202],["value",67,198],["bot",145,"bot",22,"bot",108],["bot",197,"bot",195,"bot",190],["bot",203,"bot",126,"bot",51],["bot",87,"bot",51,"bot",179],["bot",64,"bot",128,"bot",85],["bot",1,"bot",198,"bot",173],["bot",29,"bot",71,"bot",168],["bot",47,"bot",149,"bot",113],["bot",165,"bot",80,"bot",135],["bot",112,"bot",162,"bot",174],["bot",149,"output",1,"bot",172],["value",41,80],["bot",5,"bot",136,"bot",62],["bot",143,"bot",97,"bot",41],["bot",86,"bot",145,"bot",71],["value",59,147],["bot",57,"bot",30,"bot",188],["bot",36,"bot",150,"bot",30],["bot",135,"bot",44,"bot",117],["bot",134,"bot",16,"bot",35],["bot",167,"bot",28,"bot",95],["bot",22,"bot",127,"bot",119],["bot",26,"bot",81,"bot",16],["bot",33,"bot",6,"bot",78],["bot",171,"bot",186,"bot",17],["bot",16,"bot",96,"bot",33],["bot",118,"bot",117,"bot",56],["bot",199,"bot",98,"bot",145],["bot",188,"bot",21,"bot",202],["value",29,164],["bot",169,"bot",77,"bot",140],["bot",96,"bot",181,"bot",6],["value",71,201],["bot",194,"bot",87,"bot",150],["bot",160,"bot",203,"bot",87],["bot",15,"bot",158,"bot",105],["bot",42,"bot",166,"bot",39],["bot",133,"bot",54,"bot",110],["value",47,13],["bot",31,"output",8,"bot",9],["bot",159,"bot",74,"bot",155],["bot",157,"bot",12,"bot",187],["bot",176,"bot",139,"bot",58],["bot",35,"bot",33,"bot",78],["bot",90,"bot",148,"bot",136],["bot",122,"bot",70,"bot",206],["bot",114,"bot",72,"bot",157],["bot",55,"bot",40,"bot",184],["bot",37,"bot",193,"bot",25],["value",31,13],["bot",107,"bot",99,"bot",93],["bot",14,"bot",58,"bot",38],["bot",77,"bot",86,"bot",29],["bot",116,"bot",79,"bot",170],["bot",23,"bot",132,"bot",70],["bot",148,"bot",144,"bot",120],["bot",195,"bot",170,"bot",185],["bot",185,"bot",138,"bot",63],["bot",62,"bot",107,"bot",166],["bot",174,"bot",141,"bot",128],["bot",7,"bot",91,"bot",11],["bot",3,"bot",140,"bot",34],["bot",12,"bot",3,"bot",125],["value",7,148],["bot",70,"bot",161,"bot",151],["bot",89,"bot",116,"bot",195],["bot",108,"bot",119,"bot",204],["bot",201,"bot",1,"bot",104],["bot",18,"output",15,"bot",208],["bot",66,"bot",177,"bot",130],["bot",189,"bot",165,"bot",177],["bot",48,"output",13,"bot",18],["bot",186,"bot",189,"bot",66],["bot",82,"bot",167,"bot",0],["bot",92,"bot",201,"bot",49],["bot",144,"bot",7,"bot",102],["bot",97,"bot",146,"bot",153],["bot",104,"bot",173,"bot",82],["bot",74,"bot",83,"bot",50],["bot",49,"bot",104,"bot",115],["bot",172,"output",20,"bot",48],["bot",163,"bot",41,"bot",53],["bot",117,"bot",26,"bot",134],["bot",168,"bot",61,"bot",182],["bot",65,"bot",131,"bot",74],["bot",180,"output",6,"bot",191],["bot",126,"output",19,"bot",19],["value",19,186],["bot",166,"bot",93,"bot",75],["bot",193,"bot",59,"bot",88],["bot",81,"bot",115,"bot",96],["bot",207,"bot",94,"bot",131],["bot",130,"bot",118,"bot",56],["bot",153,"bot",106,"bot",152],["value",17,92],["bot",110,"bot",143,"bot",163],["bot",192,"output",7,"bot",129],["bot",156,"bot",10,"bot",68],["bot",83,"bot",20,"bot",160],["bot",2,"bot",174,"bot",64],["value",23,91],["bot",10,"bot",178,"bot",133],["bot",103,"bot",157,"bot",40],["bot",61,"bot",204,"bot",175],["bot",63,"bot",47,"bot",127],["bot",105,"bot",200,"bot",24],["bot",79,"output",10,"bot",31],["bot",73,"bot",168,"bot",178],["bot",19,"output",2,"bot",139],["bot",125,"bot",34,"bot",156],["bot",56,"bot",134,"bot",35],["bot",44,"bot",183,"bot",26],["bot",4,"output",3,"bot",79],["bot",155,"bot",50,"bot",8],["value",73,101],["bot",38,"bot",123,"bot",112],["bot",151,"bot",199,"bot",86],["bot",17,"bot",66,"bot",130],["bot",13,"bot",171,"bot",17],["bot",190,"bot",185,"bot",98],["bot",161,"bot",190,"bot",199],["bot",139,"output",16,"bot",180],["bot",99,"bot",23,"bot",122],["bot",53,"bot",152,"bot",60],["bot",94,"bot",48,"bot",67],["bot",132,"bot",197,"bot",161],["bot",150,"bot",179,"bot",209],["bot",173,"bot",52,"bot",167],["bot",45,"bot",156,"bot",124],["bot",30,"bot",209,"bot",21],["bot",67,"bot",18,"bot",20],["bot",84,"bot",89,"bot",197],["bot",8,"bot",194,"bot",36],["bot",59,"bot",114,"bot",103],["bot",209,"bot",14,"bot",111],["value",53,76],["bot",69,"bot",137,"bot",154],["bot",46,"bot",32,"bot",59],["bot",111,"bot",38,"bot",137],["bot",196,"bot",121,"bot",97],["bot",52,"bot",5,"bot",28],["bot",11,"bot",84,"bot",132],["bot",204,"bot",65,"bot",159],["bot",164,"bot",92,"bot",183],["bot",24,"bot",109,"bot",43],["value",2,171],["bot",51,"bot",19,"bot",176],["bot",136,"bot",120,"bot",107],["bot",147,"bot",4,"bot",116],["bot",25,"bot",88,"bot",55],["bot",129,"output",18,"bot",158],["bot",152,"bot",57,"bot",60],["bot",39,"bot",75,"bot",72],["bot",124,"bot",68,"bot",142],["bot",141,"bot",129,"bot",15],["bot",85,"bot",105,"bot",24],["value",3,90],["bot",80,"bot",164,"bot",44],["bot",54,"bot",196,"bot",143],["bot",34,"bot",73,"bot",10],["bot",175,"bot",159,"bot",121],["bot",32,"bot",39,"bot",114],["bot",140,"bot",29,"bot",73],["bot",200,"output",17,"bot",109],["bot",106,"bot",36,"bot",57],["bot",177,"bot",135,"bot",118],["bot",170,"bot",31,"bot",138],["bot",158,"output",4,"bot",200],["bot",6,"bot",27,"bot",37]];

// const day10Arr = [
//     ["value",5,2],
//     ["bot",2,"bot",1,"bot",0],
//     ["value",3,1],
//     ["bot",1,"output",1,"bot",0],
//     ["bot",0,"output",2,"output",0],
//     ["value",2,2]
// ];

function day10() {
    const target = [61, 17];
    const grid = [210, 21];
    let answer = [0, 0];
    let bots = [];
    let outputs = [];

    for (let g = 0; g < grid[0]; g++) {
        bots.push([]);
    }
    for (let h = 0; h < grid[1]; h++) {
        outputs.push([]);
    }

    for (let i = 0; i < day10Arr.length; i++) {
        const key = day10Arr[i][0];
        if (key == "value") {
            bots[day10Arr[i][2]].push(day10Arr[i][1]);
        }
    }

    let botsMoving = true;
    while (botsMoving) {
        botsMoving = false;

        for (let j = 0; j < bots.length; j++) {
            if (bots[j].length == 2) {
                // check if bot has target values.
                if (Math.max(...bots[j]) == target[0] && Math.min(...bots[j]) == target[1]) {
                    answer[0] = j;
                }

                for (let k = 0; k < day10Arr.length; k++) {
                    if (day10Arr[k][0] == "bot") {
                        if (day10Arr[k][1] == j) {
                            const lowVal = [day10Arr[k][2], day10Arr[k][3]];
                            const highVal = [day10Arr[k][4], day10Arr[k][5]];

                            if (lowVal[0] == "bot") {
                                bots[lowVal[1]].push(Math.min(...bots[j]))
                            } else {
                                outputs[lowVal[1]].push(Math.min(...bots[j]))
                            }
                            if (highVal[0] == "bot") {
                                bots[highVal[1]].push(Math.max(...bots[j]))
                            } else {
                                outputs[highVal[1]].push(Math.max(...bots[j]))
                            }

                            break;
                        }
                    }
                }

                bots[j] = [];
            }
        }

        for (let l = 0; l < bots.length; l++) {
            if (bots[l].length == 2) {
                botsMoving = true;
            }
        }
    }

    answer[1] = (outputs[0] * outputs[1] * outputs[2]);
    return answer;
}

console.log(`Part one's answer is: ${day10()[0]}`);
console.log(`Part two's answer is: ${day10()[1]}`);