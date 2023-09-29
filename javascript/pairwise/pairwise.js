function pairwise(arr, arg) {
    return arg;
}

function sum(indexesArray) {
    /* Takes a flat array of numbers. 
        Returns the sum of those numbers. */ 
    
        returnValue = indexesArray.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0
    )
    
    return returnValue
}

//   x = pairwise([1,4,2,3,0,5], 7);
//   console.log(x)


module.exports = {pairwise, sum};

// export {sum};

