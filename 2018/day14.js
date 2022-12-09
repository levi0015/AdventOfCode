console.log("Day 14");

const day14Arr = 51589;

function day14() {
    let recipes = [3, 7];
    let a = 0;
    let b = 1;

    while (recipes.length < (day14Arr + 10)) {
        let newRecipe = (recipes[a] + recipes[b]).toString();
        if (newRecipe.length == 2) {
            recipes.push(Number(newRecipe[0]), Number(newRecipe[1]));
        } else {
            recipes.push(Number(newRecipe[0]));
        }
    
        a = (a + ((recipes[a] + 1) % recipes.length)) % recipes.length;
        b = (b + ((recipes[b] + 1) % recipes.length)) % recipes.length;
    }

    return (recipes.splice(day14Arr, 10).join(''));
}

function day14Two() {
    console.time()
    let recipes = [3, 7];
    let a = 0;
    let b = 1;

    let isDone = false;
    while (!isDone) {
        let newRecipe = (recipes[a] + recipes[b]).toString();
        if (newRecipe.length == 2) {
            recipes.push(Number(newRecipe[0]), Number(newRecipe[1]));
        } else {
            recipes.push(Number(newRecipe[0]));
        }
    
        a = (a + ((recipes[a] + 1) % recipes.length)) % recipes.length;
        b = (b + ((recipes[b] + 1) % recipes.length)) % recipes.length;

        if (recipes.length >= day14Arr.toString().length) {
            // let numOne = Number(recipes.splice(-6).join(''));
            // let numTwo = numOne;
            isDone = true;
            if (numOne == day14Arr || numTwo == day14Arr) {
                isDone = true;
                return 0;
            }
        }
    }

    console.timeEnd()
    return (recipes.splice(day14Arr, 10).join(''));
}

console.log(`Part one's answer is: ${day14()}`);
// console.log(`Part two's answer is: ${day14Two()}`);