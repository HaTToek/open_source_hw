function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if(num <= 1) {
        return false;
    }

    if(num%1 !== 0){
        console.log("not input positive integers")
        return false;
    }

    if( num % 2 === 0) { 
        return num === 2 ? true : false;
    }

    const sqrt = parseInt(Math.sqrt(num));

    for(let divider = 3; divider <= sqrt; divider += 2) {
        if(num % divider === 0) {
            return false;
        }
        
    }
    
    return true;
}

function fact(num) {
    if(num >= 15){
        console.log("please input less then 15")
    }
    let result = num;
    for(let i = num-1; i>0; i--){
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    fact
}