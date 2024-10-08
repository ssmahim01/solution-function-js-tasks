// Return the average of values.

function make_avg(arr, size){
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / size;

    return average;
}

let array = [20, 40, 80, 120, 140, 180];
let sizeArray = array.length;
let average = make_avg(array, sizeArray).toFixed(0);
console.log('The average of values is:', average);

// The output => The average of values is: 97.