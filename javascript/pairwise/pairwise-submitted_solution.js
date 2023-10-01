function pairwise(arr, arg) {
    let array_to_sum = check(arr, arg);
    // console.log (array_to_sum);
    return sum(array_to_sum);
}

function find_number_in_array(arr, num) {
    let index_number = arr.findIndex((e) => e == num);
    return index_number;
}

function check(arr, num) {
    // [1, 1, 1], 2
    // console.log(arr, '-->', num, '== 1')

    let used_indexes = [];

    // console.log('index', '|  where the number exists')

    arr.forEach((arrElement, arrIndex) => {
        let number_to_look_for = num - arrElement;
        // console.log("number we're looking for ", number_to_look_for);
        // console.log('Current step          ', print_array_step(arr, arrIndex));

        arr.every((everyElement, everyIndex) => {
            // console.log('Checking for value in ', print_array_step(arr, everyIndex), everyElement  == number_to_look_for);

            if (arrIndex != everyIndex && (find_number_in_array(used_indexes, everyIndex) == -1) && everyElement  == number_to_look_for){
                used_indexes.push(everyIndex);
                return false;
            }
            else{
                return true;
            }
    
        });

        // console.log(used_indexes);        
    });
    return used_indexes;
}

function sum(indexesArray) {
    /* Takes a flat array of numbers. 
        Returns the sum of those numbers. */
    // console.log(indexesArray);
    let returnValue = indexesArray.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0
    )

    return returnValue
}