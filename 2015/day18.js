console.log(`Day 18`);

const day18Arr = ["###.##..##.#..#.##...#..#.####..#.##.##.##..###...#....#...###..#..###..###.#.#.#..#.##..#...##.#..#", ".#...##.#####..##.......#..####.###.##.#..###.###.....#.#.####.##.###..##...###....#.##.....#.#.#.##", ".....#.#.....#..###..####..#.....##.#..###.####.#.######..##......#####.#.##.#########.###..#.##.#.#", "...###......#.#..###..#.#.....#.##..#.##..###...#.##.#..#..#.##.#..##......##.##.##.######...#....##", ".###.....#...#.#...####.#.###..#..####.#..#.##..####...##.#...#..###...###...####..##....####.##..#.", "..#....#...#.......#..###.###....#.##..#.....###.#.##.#....#.#....##.##..#.##.#..###.###.##.##..##.#", "##..#####.#.#....#.#...#.#.####..#....#..#....#.#..#.#####...#..##.#.....#.##..##.####......#.#.##..", ".#..##..#.#.###..##..##...#....##...#..#.#..##.##..###.####.....#.####.#.....##.#.##...#..####..#...", "#.#####.......#####...#...####.#.#.#....#.###.#.##.#####..#.###.#..##.##.#.##....#.##..#....####.#.#", "#.##...#####....##.#.#.....##......##.##...#.##.##...##...###.###.##.#.####.####.##..#.##.#.#.####..", "#.##.##....###.###.#..#..##.##.#..#.#..##..#.#...#.##........###..#...##.#.#.##.......##.....#...###", "###..#.#..##.##.#.#.#...#..#...##.##.#.########.......#.#...#....########..#.#.###..#.#..#.##..#####", "####.#.#...#.##.##..#.#...#....#..###..#.#.#.####.#.##.##.#..##..##..#..#####.####.##..########..##.", ".#.#...#..##.#..#..###.#..####.......##.#.#.#.##.#####..#..##...#.##...#..#....#..#..###..####.#....", "..#.#...#....##...#####..#..#...###.###.....#.###.#....#.#..##...#.##.##.####.#.#.#..#.##.#....#.#..", "#....###.####.##..#.#.###..###.##.##..#.#...###..#.##.#####.##.#######..#.#...##.#..........####.###", "#.#####.#......#.#......#.....##...##.#.#########.#......##..##..##.#..##.##..#....##...###...#.#...", "#..#..##..###.#.#.#.#.....###.#.####.##.##....#.#..##....#.#..#.####..###.##...#######.#####.##.#.#.", "..###.#........##.#...###..#.##..#.#....##.#......#..#.##..#.#..#.#..#.####.#####..###.##..#.##.#...", "##.###....#..##...#..#.#......##..#...#..#.####..#.##...##.####.#...#..###...#.#.#....###.##..#.#...", "..##.##.#.##..##.#..#.###...##..##..#....##..##...####.#..####.###...#.....#..#.##..##..###..#.#...#", "#.#....#.....#...##.#...####..#..##..##.####..##..##...####...#....##.#.#######..##.#......######.#.", "#.#...###.######.######..##..##....#.#......#......#.#.##.#.##.#.#.#...#...#....#.#.#.#..#.##..#...#", "####.###.#.#.##..#.##.#...#.##...#.##.##...#.....#.#..#.####.##..######.#..#.#..##....#.#.#..#.#.#.#", "..##......#.#...#.##.##..##..##..#..##..#########.#..###..###.##...#..##.#..#.#.#.######..#....#.#..", "..##.##.#...###.#...##..######.##.#..####..#..#.#.##.####.##.##.#...##....#...###.##.####..#....#.#.", "####...###..#.#.##.#.#....###..##.#.#..########..#...#.#...#.##....##.##...#.....#.#.....#.....#....", ".#.###############....#.##..###..#.####.#.##.##..#..#.#...###...##..##.##.#.....##...###.###.....#..", ".###..#..##.##..####.#.###.##.##..#..##....#.#......#......##.#...#.#...#..##.#.#...#...#.##..#.##..", "###.#.#.########.#.#..####.#..##.#.##.##.###.##..######...#..##.##.#..#.#...#.##..#####.....#.#.#..#", ".##.##..#.#...#####.#.#.###...##...####...#......#...#..####..#.##..........#..#.#..###....######.##", "..#####...#.#.#.#..#.##..#...#.#..#.##...##..##.##.#.##.#..#.#...#.......##.#...###.....#...#.#.#.##", "##.##.#..######.##...#.....#.###.#..##.#.#.#..####.#....##.#....####...##....#.#.##.#..###.##.##..##", ".###.##.#..#.###.####..#.##..####.#.#.##..###.#######.###.###...####........##....###.#...#.#.####.#", "........#..#.#..##..########..........#.##.#..##.#...#.....####....##..#..#.#####.###...#...#.##.###", ".....#..##.####...##.#####..######.##.#.###.####.##.##.#..##.##.######.##......#..#.####..##....#.##", "##...####....#.##.##.###....#.#...#.####..##.#.##.#.#...####.#.#.#.#...##.###...##...###...######.##", ".#....#.#.####...#.##.....##...###.#.#.##...##.#####....#.######.#.#....##..##...##....##.#.##.#.#.#", ".###..###.#.......#.#######..#.#.#.######....#.#####.#.....#.#########...#....##...##.####.#..#.....", "##.#..##..##.....#..##...#..##.##.#..#.#####.##.##.#.##.##...##.######.####..#.##..#####.##...##..#.", "#.###...##.#.#.#.##....#.#.##.##..#....#...#.#.........#..#..####..####.####..#.##.##.#....####..##.", ".#..######..#####.####.##.#.....#.#.#####..##..###.#.#.#..#.#...#.#######..##....##.##...#######..#.", "#...#....#.#.##..#####..#########..#.....#...##.#.#.###...#####..##...##...####.......#######.#..###", ".#......#...##.###..#....#...#.#.....#.#...##.#.#..#..###.##.###.#.##..##...#.##......#.###..#.#..##", ".#....####...###..#.....##..#...#.#.###.#.#.##...#.##.##.#.#.#..####..###.#.#.#.##.#.#...#..#...####", "......##.##.#...#####.##..#.###..#.#####..##.#..##.###......#...#...#..#......###.######...#.#.##..#", "###..#...#.##..###.#....##...#..#####.#.#..#.###...#####.#....##..####.#.##...#.#...##..#.#.#.#..#.#", "...##.#.##.##..#.#.#.###.#.#...#.....###.###.##...#.###.##...##..#..###.#..##.##..###.#....###..##..", ".##.#..###..###.##.##...#..#####...#.....#####.##..####...#.##.#.#..##.#.#.#....###.....#....##.....", "######.#..#.#..#....#.###...####.####.#.........#..##.#..##..##.....#..#.##.##...#...#####.#.##..#.#", ".##.###...####....#.####...#####..#..#...#..#.....###.#..#.###..#.###.#.......##.####..#.##.#...##..", "........#.#.##.#.....#####.###......##..#.##.#..#...####.#...#..###.#.#...##..#.#...#.####...#.#.###", ".#..#.##..##...######.###.##.#.#...#.#.#.#.##..##..##.#.##..#....#.##...#.##.##...##....##.###.##.#.", "##...#...#...###.#.#...#...#..###......##.#.#....##..##.#..##.#.######...#..##.#.##.#.#....#.##.##..", "...#..###.#....#...#.##..##.#.##.#..###.##..#.##..####.#########....#.....##.#.##.##..##.##.######.#", "#.##.#..##.......###...#.###....###.#..####..##.#####.##.###....##....#.###...####..#.#.#.##.....###", ".......#...#...##.#...##.#.#..#.##..##.#....###...##.#####...#.........#.......###.##.#.#.###....##.", "###.#.##.##.....#.#..#.#..####.####..#..###..........####.#.##...#######.###..#####..#.....#..###..#", "#...##.##..####.##.###.#.#######..###.#..#######..#.##.####...#..#.##.####..####.#.#.......####.#...", "...#.##..#..#..##........#.#..#..#.#....#.###.#.###..#.......###..#.....#....#..##.#...#.###...##.#.", "###.##..#.##.#.#####..#.##.####....#####..###.#.#..#...#...###.#.##..#.#.#.....#.####.#.#.#.#.#.#...", "..##..##..#..##.##.#...#..#....####....#...#..####..#.....######.###.####.#....##....##.#.#.###....#", ".#.#.#.##..####..#.....#.####.#....#.....#....#.##..#.#..#.#...#.#.#.#..#..#..##.#....####.......#..", "..##.##..###......#...#..##...#.###.####.#...#.####..#.#.#.....#.#...####...#.########.##.#.#.#..###", "#....#.##.....##.###.##.###..#.####.....####.##...#..##.###...###..###.#....####.#..#..#..#.#..##.#.", ".#.#.##....#.##......#.#..###.#....###....#......#.#.##.##.#########..##..#...#.####..#...####..#..#", ".#.#.......##.#.##.#...#...#.##.#..#.#.#.##....#..###.###.##.#.#...##.#..#..##....#..###.#...#.#.##.", "#.##.#....####...#..##..#.#.#.#.##.#...#####.#...#..#..#.####.####.#.#....#......##..##..###...#..##", "..##.###..##.####..#..#..##...###.#.#.#######.####...####......##.##..#...#.##...##....#..#..#.....#", "....#..#..#.#.####.#...##..#....####.#..####...#.#...###...#..#..##...#....##...#.....#.#..#.#.#...#", "...#.#.#.##..##.###..#.######....####.###...##...###.#...##.####..#.#..#.#..#.##.....#.#.#..##......", ".#.##.##.....##.#..###.###.##....#...###.#......#...##.###.#.##.##...###...###...#.######..#......#.", "###..#...#......#..##...#....##.#..###.##.####..##..##....####.#...#.#....##..#.#######..#.#.#####..", "##...#####..####..##....#.#.###.##.#..#.#..#.....###...###.#####.....#..##.#......#...#.###.##.##...", "...#.#.#..#.###..#.#.#....##.#.#..####.##.#.####.#.#.#...#....##....#.##.####..###.#.#...##.#..#..##", "#.#.#..#.##..##.##.#...##.#....#...###..##..#.#######.#.###..##......##.#..###.########.#.##..#.#.##", "######.###....##..#..#...####....#.#.#..#...#..######.#.#.##..##....##....##.##.##...#..#.####.#.#..", "#####.###..#..###......##...##.####.#.#.#.###.......##..##.####..##.####.#..#..####..#.####.#####...", "##.#.#.###..##.#.##.#.#.#.##.#...##........###.#.##..####....###.#.####.####.#.......##.##.##...##..", "#.#..###...#..##.....##.#..#.#..##..######.#####...###.#.......###...#..##..#..#..##.#.#....#..#..#.", "#.#..####.###..#...#...#...#.###..#.#.#.#.#.#.#..#....#.##.##.##..###..####.#..##..##.###.###....##.", "#..#.##.#####........#..#.##.#..##.#...#....#..#.##..###..##..##.##..#..##.#.#...#.#.##.#.##....#.#.", ".......##..#.....#..#.#.....#.##...####.###..####..#.#.#.#..#.....#....##...#..#.##..###.#.#....#...", "#...###########.##.....##...###.#.##.##..####.##...#.####.#####.#####.####...###.##...##..#.#.###..#", "....#.#.###.####.###...#...#.#..###.#.#.##...#..#.#.#..#.####..#..###.######.#.####.###...###.#.##.#", ".....#..#..########...#.#.#.#.#.#.#.#..###.##..####...##.#.#.#...##..#####.##.#...#.####.#######.##.", ".......#...#.#..#..#...#..#..##.....#.##....##.##...##..##.##...##...#.#..#.##.#.###.#.####.#.#..##.", ".####...#...#.#.#....##..........##.##.###.##.#.#..#.#.#......########.#...#.####.##.###..##...####.", "#.#.#...##.###..##..#..#.....####.#.....##.##.#..#.#.###.#..#######...##..#.#..#.#..############.###", ".##..####.#..#.....###..#..#.#.....#.#.#...##.##.#....#..#..###.#...#....#.#...####..#.....###.####.", "..#...#.###.###....##.#..#.##..####.##.#.##.##.##...###.####..#.#.#.##.#.#.#..###..##.##.##.##.#..##", "#...............##.....######.#.#####.##.#....#.#..#.##...#.##....#........##.##...#.##.##.#..#.##.#", "#..##..#.#.#.##.#..#.#.##.##...#...#..#.#.##..#.#...###...##...###..#####.#.#..#..#.#..#.#.##...##.#", ".#######.#.....##...#.#.####.######.#..#......#....##.#.#..#..###.#...###...#....#.#..#.##.#...#.#..", "#.###......##.#.##..#.###.###..####..##....#..###......##..##..#####.####....#...###.....###.#..#...", "###...#....###.#..#.###.##...###.##.......##.##.#.#.#....####....###..##.###...#..##....#.#.##..##..", ".##.......##.######.#.#..#..##....#####.###.#.##.....####....#......####....#.##.#.##..#.##...##.#.#", ".#.###...#.#.#.##.###..###...##..#.##.##..##..#.....###.#..#.##.##.####........##.#####.#.#....#...#", "##...##..#.##.#######.###.#.##.#####....##.....##.#.....#.#.##.#....#.##.#....##.#..#.###..#..#.#...", ".#..#.#.#.#...#.##...###.##.#.#...###.##...#.#..###....###.#.###...##..###..#..##.##....###...###.##"];
// const day18Arr = [
//     ".#.#.#",
//     "...##.",
//     "#....#",
//     "..#...",
//     "#.#..#",
//     "####.."
// ];

function day18One() {
    let startArr = [];
    let time = 100;
    let lightsOn = 0;

    day18Arr.forEach(string => {
        let split = [];
        for (let i = 0; i < string.length; i++) {
            if (string[i] == "#") {
                split.push(1);
            } else {
                split.push(0);
            }
        }
        startArr.push(split);
    });

    // console.log(startArr);
    
    for (let h = 0; h < time; h++) {
        let afterArr = [];
        lightsOn = 0;
        
        for (let i = 0; i < startArr.length; i++) {
            let split = [];
            for (let j = 0; j < startArr[i].length; j++) {
                let nbOn = 0;
    
                if (i == 0 && j == 0) {
                    // console.log("top left");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i + 1][j + 1];
                } else if (i == 0 && j == startArr[i].length - 1) {
                    // console.log("top right");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i + 1][j - 1];
                } else if (i == startArr.length - 1 && j == 0) {
                    // console.log("bottom left");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i - 1][j + 1];
                } else if (i == startArr.length - 1 && j == startArr[i].length - 1) {
                    // console.log("bottom right");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i - 1][j - 1];
                } else if (i == 0 && j > 0 && j < startArr[i].length - 1) {
                    // console.log("top");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j + 1];
                    nbOn += startArr[i + 1][j - 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                } else if (i > 0 && i < startArr.length - 1 && j == 0) {
                    // console.log("left");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j + 1];
                } else if (i > 0 && i < startArr.length - 1 && j == startArr[i].length - 1) {
                    // console.log("right");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j - 1];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j - 1];
                } else if (i == startArr.length - 1 && j > 0 && j < startArr[i].length - 1) {
                    // console.log("bottom");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i - 1][j - 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                } else {
                    // console.log("rest");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i + 1][j + 1];
                    nbOn += startArr[i + 1][j - 1];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i - 1][j - 1];
                }
    
                if (startArr[i][j] == 1) {
                    // console.log("light on");
                    if (nbOn == 2 || nbOn == 3) {
                        split.push(1);
                        lightsOn++;
                    } else {
                        split.push(0);
                    }
                } else if (startArr[i][j] == 0) {
                    // console.log("light off");
                    if (nbOn == 3) {
                        split.push(1);
                        lightsOn++;
                    } else {
                        split.push(0);
                    }
                }
                // console.log(nbOn)
            }
            afterArr.push(split);
        }
        startArr = afterArr;
        // console.log(afterArr)
    }
    return lightsOn;
}

function day18Two() {
    let startArr = [];
    let time = 100;
    let lightsOn = 0;

    day18Arr.forEach((string, h) => {
        let split = [];
        for (let i = 0; i < string.length; i++) {

            if ((h == 0 && i == 0) || 
                (h == 0 && i == string.length - 1) || 
                (h == day18Arr.length - 1 && i == 0) || 
                (h == day18Arr.length - 1 && i == string.length - 1)) {
                split.push(1);
            } else if (string[i] == "#") {
                split.push(1);
            } else {
                split.push(0);
            }
        }
        startArr.push(split);
    });

    // console.log(startArr);
    
    for (let h = 0; h < time; h++) {
        let afterArr = [];
        lightsOn = 0;

        for (let i = 0; i < startArr.length; i++) {
            let split = [];
            for (let j = 0; j < startArr[i].length; j++) {
                let nbOn = 0;
    
                if ((i == 0 && j == 0) || 
                    (i == 0 && j == startArr[i].length - 1) || 
                    (i == startArr.length - 1 && j == 0) || 
                    (i == startArr.length - 1 && j == startArr[i].length - 1)) {
                    // console.log("corners");
                    split.push(1);
                    lightsOn++;
                    continue;
                } else if (i == 0 && j > 0 && j < startArr[i].length - 1) {
                    // console.log("top");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j + 1];
                    nbOn += startArr[i + 1][j - 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                } else if (i > 0 && i < startArr.length - 1 && j == 0) {
                    // console.log("left");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j + 1];
                } else if (i > 0 && i < startArr.length - 1 && j == startArr[i].length - 1) {
                    // console.log("right");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j - 1];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i + 1][j - 1];
                } else if (i == startArr.length - 1 && j > 0 && j < startArr[i].length - 1) {
                    // console.log("bottom");
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i - 1][j - 1];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                } else {
                    // console.log("rest");
                    nbOn += startArr[i + 1][j];
                    nbOn += startArr[i - 1][j];
                    nbOn += startArr[i][j + 1];
                    nbOn += startArr[i][j - 1];
                    nbOn += startArr[i + 1][j + 1];
                    nbOn += startArr[i + 1][j - 1];
                    nbOn += startArr[i - 1][j + 1];
                    nbOn += startArr[i - 1][j - 1];
                }
    
                if (startArr[i][j] == 1) {
                    // console.log("light on");
                    if (nbOn == 2 || nbOn == 3) {
                        split.push(1);
                        lightsOn++;
                    } else {
                        split.push(0);
                    }
                } else if (startArr[i][j] == 0) {
                    // console.log("light off");
                    if (nbOn == 3) {
                        split.push(1);
                        lightsOn++;
                    } else {
                        split.push(0);
                    }
                }
                // console.log(nbOn)
            }
            afterArr.push(split);
        }
        startArr = afterArr;
        // console.log(afterArr)
    }
    return lightsOn;
}

console.log(`Part one's answer is: ${day18One()}`);
console.log(`Part two's answer is: ${day18Two()}`);