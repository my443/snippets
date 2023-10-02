function bubbleSort(array) {
    // Only change code below this line
    

    array.every((element, index) => {
        let continuevar= true;
        for (let i = 0; i < array.length- index - 1; i++){
            if (array[i] > array[i+1]) {
                [array[i+1], array[i]] = [array[i], array[i+1]];
                continuevar == false;
            }
        }
        return continuevar;
    });
    
    return array;
    // Only change code above this line
  }


console.log(bubbleSort([1, 7, 3, 2, 8, 5]));

  module.exports = { bubbleSort };