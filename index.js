// Code your solution here
function findMatching(arr, name) {
    return arr.filter((element) => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, fLetter) {
    return arr.filter((element) => element.toLowerCase().indexOf(fLetter.toLowerCase()) === 0)
}

function matchName(arr, name) {
    return arr.filter((element) => element.name === name);
}