// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    //'appends a cat to the cats array and returns a new array, leaving the cats array unchanged'
    const newCats= [...cats];
    newCats.push(name);
    return newCats
}

function prependCat(name){
    //'prepends a cat to the cats array and returns a new array, leaving the cats array unchanged'
    const newCat=[name , ...cats];
    return newCat
}

function removeLastCat(name){
    //'removes the last cat in the cats array and returns a new array, leaving the cats array unchanged'
    const newCats = [...cats]
    newCats.splice(-1,1);
    return newCats
}

function removeFirstCat(name){
    //'removes the first cat from the cats array and returns a new array, leaving the cats array unchanged'
    const newCats = [...cats]
    newCats.splice(0,1);
    return newCats
}