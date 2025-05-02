/**
 * @return {null|boolean|number|string|Array|Object}
 */

// const Input = [null, {}, 3]
const Input = [1, 2]

Array.prototype.last = function() {
    if(this.length === 0){
        return -1
    }
    return this[this.length - 1]
    
};

console.log(Array.prototype.last(Input));

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */