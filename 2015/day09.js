console.log("Day 09");
const day09Arr = [
    ["Faerun", "Tristram", 65],
    ["Faerun", "Tambi", 129],
    ["Faerun", "Norrath", 144],
    ["Faerun", "Snowdin", 71],
    ["Faerun", "Straylight", 137],
    ["Faerun", "AlphaCentauri", 3],
    ["Faerun", "Arbre", 149],
    ["Tristram", "Tambi", 63],
    ["Tristram", "Norrath", 4],
    ["Tristram", "Snowdin", 105],
    ["Tristram", "Straylight", 125],
    ["Tristram", "AlphaCentauri", 55],
    ["Tristram", "Arbre", 14],
    ["Tambi", "Norrath", 68],
    ["Tambi", "Snowdin", 52],
    ["Tambi", "Straylight", 65],
    ["Tambi", "AlphaCentauri", 22],
    ["Tambi", "Arbre", 143],
    ["Norrath", "Snowdin", 8],
    ["Norrath", "Straylight", 23],
    ["Norrath", "AlphaCentauri", 136],
    ["Norrath", "Arbre", 115],
    ["Snowdin", "Straylight", 101],
    ["Snowdin", "AlphaCentauri", 84],
    ["Snowdin", "Arbre", 96],
    ["Straylight", "AlphaCentauri", 107],
    ["Straylight", "Arbre", 14],
    ["AlphaCentauri", "Arbre", 46]
];
const day09ArrTwo = [];

function day09() {
    const cities = ["Faerun", "Tristram", "Tambi", "Norrath", "Snowdin", "Straylight", "AlphaCentauri", "Arbre"];
    let lowestRoute = null;
    let highestRoute = null;

    for (let a = 0; a < cities.length; a++) {
        for (let b = 0; b < cities.length; b++) {
            if (cities[a] != cities[b]) {
                for (let c = 0; c < cities.length; c++) {
                    if (cities[b] != cities[c] && cities[a] != cities[c]) {
                        for (let d = 0; d < cities.length; d++) {
                            if (cities[c] != cities[d] && cities[b] != cities[d] && cities[a] != cities[d]) {
                                for (let e = 0; e < cities.length; e++) {
                                    if (cities[d] != cities[e] && cities[c] != cities[e] && cities[b] != cities[e] && cities[a] != cities[e]) {
                                        for (let f = 0; f < cities.length; f++) {
                                            if (cities[e] != cities[f] && cities[d] != cities[f] && cities[c] != cities[f] && cities[b] != cities[f] && cities[a] != cities[f]) {
                                                for (let g = 0; g < cities.length; g++) {
                                                    if (cities[f] != cities[g] && cities[e] != cities[g] && cities[d] != cities[g] && cities[c] != cities[g] && cities[b] != cities[g] && cities[a] != cities[g]) {
                                                        for (let h = 0; h < cities.length; h++) {
                                                            if (cities[g] != cities[h] && cities[f] != cities[h] && cities[e] != cities[h] && cities[d] != cities[h] && cities[c] != cities[h] && cities[b] != cities[h] && cities[a] != cities[h]) {
                                                                const route = [cities[a], cities[b], cities[c], cities[d], cities[e], cities[f], cities[g], cities[h]];
                                                                let routePoints = 0;

                                                                for (let i = 0; i < route.length - 1; i++) {
                                                                    const pointA = route[i];
                                                                    const pointB = route[i + 1];

                                                                    for (let j = 0; j < day09Arr.length; j++) {
                                                                        if ((day09Arr[j][0] == pointA && day09Arr[j][1] == pointB) || (day09Arr[j][0] == pointB && day09Arr[j][1] == pointA)) {

                                                                            routePoints += day09Arr[j][2];
                                                                        }
                                                                    }
                                                                }

                                                                if (lowestRoute == null || routePoints < lowestRoute) {
                                                                    lowestRoute = routePoints;
                                                                }
                                                                if (highestRoute == null || routePoints > highestRoute) {
                                                                    highestRoute = routePoints;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return [lowestRoute, highestRoute];
}

console.log(`Part one's answer is: ${day09()[0]}`);
console.log(`Part two's answer is: ${day09()[1]}`);