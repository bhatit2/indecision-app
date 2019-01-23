/**Arrow Functions 
 * Difference between es5 functions and arrow functions are :
 * 1. arguments object is no longer boundin arrow funtcions.
 * 2. this keyword is also no longer bound in arrow functions.
*/

function square(x){
    return x*x;
}

console.log(square(4));

const squareArrow = (x) => x*x;
console.log(squareArrow(5));

const getFirstName = (name) => name.split(' ')[0];

const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 3,
    multiply(){
        return this.numbers.map(val=> val*this.multiplyBy)
    }
}
console.log(multiplier.multiply());