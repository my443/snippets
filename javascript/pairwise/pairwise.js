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
    // [1, 1, 1], 2
    console.log(arr, '-->', num, '== 1')

    used_indexes = [];

    console.log('index', '|  where the number exists')

    arr.forEach((arrElement, arrIndex) => {
        number_to_look_for = num - arrElement;
        console.log("number we're looking for ", number_to_look_for);
        console.log('Current step          ', print_array_step(arr, arrIndex));

        arr.every((everyElement, everyIndex) => {
            console.log('Checking for value in ', print_array_step(arr, everyIndex), everyElement  == number_to_look_for);

            if (arrIndex != everyIndex && (find_number_in_array(used_indexes, everyIndex) == -1) && everyElement  == number_to_look_for){
                used_indexes.push(everyIndex);
                return false;
            }
            else{
                return true;
            }
    
        });

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

function print_array_step (arr, index_to_display) {
    returnArray = [];
    arr.forEach((element, index) => {
        if (index != index_to_display){
            returnArray.push('x');
        } 
        else{
            returnArray.push(element);
        }
    })
    // console.log(returnArray);
    return returnArray
}


// check([1, 1, 1], 2)
check([1, 3, 2, 4], 4);

module.exports = { pairwise, sum, find_number_in_array };

// export {sum};

