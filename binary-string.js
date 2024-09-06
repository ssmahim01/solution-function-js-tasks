// Count zero which will take a binary string.

function count_zero(binaryString){
    const count = binaryString.split('0').length -1;
    return count;
}

const bString = '10101100011';
const zero = count_zero(bString);
console.log('There are zeros is exist inside this string:', zero);

// Output => There are zeros is exist inside this string: 5.