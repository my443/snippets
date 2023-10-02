a = [1, 2, 3];
b = ['a', 'b', 'a']

function getReduce(inputArray) {
    return inputArray.reduce((accumulator, currentValue, currentIndex) => {return accumulator + currentValue})
}

function getReduceWithFilter(inputArray, filterArray, filterValue) {
    // TODO - Finish this.
    return inputArray.reduce((accumulator, currentValue, currentIndex) => {return accumulator + 
        (filterArray[currentIndex] == filterValue ? currentValue : 0) }, 0)
}

console.log(getReduce(a));

console.log(a);
console.log(b);
console.log(getReduceWithFilter(a, b, 'b'))