function pairwise(arr, arg) {
    array_to_sum = check(arr, arg);
    // console.log (array_to_sum);
    return sum(array_to_sum);
    // return arg;
}

function find_number_in_array(arr, num) {
    index_number = arr.findIndex((e) => e == num);
    return index_number;
}

function check(arr, num) {
    used_indexes = [];

    console.log('index', '|  where the number exists')

    arr.forEach((element, index) => {
        number_to_look_for = num - element;
        number_exists = find_number_in_array(arr, number_to_look_for);

        if (number_exists == -1) {
            return false;
        }
        else {
            console.log(' ', index, '     ', number_exists);
            if (find_number_in_array(used_indexes, index) == -1 && find_number_in_array(used_indexes, number_exists) == -1) {
                used_indexes.push(index);
                used_indexes.push(number_exists);
            }
        }
        console.log(used_indexes);        
    });
    return used_indexes;
}

function sum(indexesArray) {
    /* Takes a flat array of numbers. 
        Returns the sum of those numbers. */
    console.log(indexesArray);
    returnValue = indexesArray.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0
    )

    return returnValue
}

//   x = pairwise([1,4,2,3,0,5], 7);
//   console.log(x)


// check([5, 6, 4, 2, 5, 7, 1], 6);
// check([7, 9, 11, 13, 15], 20);
// n = pairwise([7, 9, 11, 13, 15], 20);
// console.log(n);
check([1, 1, 1], 2)

module.exports = { pairwise, sum, find_number_in_array };

// export {sum};

