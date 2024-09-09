// Returns odd or even which takes an integer value.

function odd_even(number){
    if(number % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

const checkNumber = odd_even(12);
console.log(checkNumber); // Output => Even

const checkNumber2 = odd_even(19);
console.log(checkNumber2); // Output => Odd