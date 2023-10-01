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
        // number_to_look_for_index = find_number_in_array(arr, number_to_look_for);

        arr.every((everyElement, everyIndex) => {
            console.log(' ', arrElement, '     ', arrIndex);


            console.log((arrIndex != everyIndex && (find_number_in_array(used_indexes, everyIndex) == -1) && (everyElement + arrElement) == num) );
            console.log('arrIndex != everyIndex', arrIndex != everyIndex);
            console.log('find_number_in_array(used_indexes, everyIndex) == -1)', (find_number_in_array(used_indexes, everyIndex) == -1));
            console.log('number_to_look_for == num', number_to_look_for == num, (everyElement + number_to_look_for), num);

            if (arrIndex != everyIndex && (find_number_in_array(used_indexes, everyIndex) == -1) && (everyElement + number_to_look_for) == num ){

                used_indexes.push(everyIndex);
                return false;
            }
            else{
                return true;
            }
    
        });

        // arr.every((everyElement, everyIndex) => {
        //     console.log('arrIndex != everyIndex', arrIndex != everyIndex);
        //     console.log('find_number_in_array(used_indexes, everyIndex) == -1)', (find_number_in_array(used_indexes, everyIndex) == -1));
        //     console.log('(everyElement - arrElement) == num)', (everyElement - arrElement) == num);

        //     if (arrIndex != everyIndex && (find_number_in_array(used_indexes, everyIndex) == -1) && (everyElement + arrElement) == num){
        //         used_indexes.push(everyIndex);
        //     }
        //     else {
        //         return false;
        //     }
        // });

        // if (number_to_look_for_index == -1) {
        //     return false;
        // }
        // else {
        //     console.log(' ', index, '     ', number_to_look_for_index);

        //     // arr.every((element, every_index) => {
        //     //     console.log(' ', index, '     ', every_index)
        //     //     if(element == number_to_look_for && find_number_in_array(used_indexes, every_index) == -1){
        //     //         used_indexes.push(number_exists);
        //     //         return false;
        //     //     }
        //     // });

        //     // if (find_number_in_array(used_indexes, index) == -1 && find_number_in_array(used_indexes, number_exists) == -1) {
        //     if (find_number_in_array(used_indexes, number_to_look_for_index) == -1 ) {                
        //         used_indexes.push(number_to_look_for_index);
        //         // used_indexes.push(number_exists);
        //     }
        // }
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
// check([1, 1, 1], 2)
check([1, 3, 2, 4], 4);

module.exports = { pairwise, sum, find_number_in_array };

// export {sum};

