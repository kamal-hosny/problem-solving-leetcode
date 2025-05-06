/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let now = n - 1
    return function() {
         now++
        return now
    };
};

const counter = createCounter(10)

console.log(counter());
console.log(counter());
console.log(counter());

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */