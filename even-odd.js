// Multiply and divide tasks by Even and odd numbers.

function evenOddNumbers(number){
    if(number % 2 === 0){
        const divide = number / 2;
        console.log(divide);
        return divide;
    }
    else{
        const multiply = number * 2;
        console.log(multiply);
        return multiply;
    }
}

const result = evenOddNumbers(6);
console.log('Found even number and division result is:', result);

// The first output => Found even number and division result is: 3.

const result2 = evenOddNumbers(11);
console.log('Found odd number and multiplication result is:', result2);

// The second output => Found odd number and multiplication result is: 22.