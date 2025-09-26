// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {
    
//     return function() {
//         return n++
//     };
// };

// const counter = createCounter(10)
//   console.log(counter());// 10
//   console.log(counter());// 10
//   console.log(counter());// 10
//   console.log(counter());// 10
//   counter() // 11
//   counter() // 12

class Adder {
    constructor(a) {
        this.a = a
    }

    add(b) {
        const sum = this.a + b
        return sum
    }
}
const addTo2 = new Adder(2);
addTo2.add(5)