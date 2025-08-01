/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

let nums = [1,2,3,4]
let fn = function sum(accum, curr) { return accum + curr * curr; }
let init = 100

var reduce = function(nums, fn, init) {
    let result = init
    for (let index = 0; index < nums.length; index++) {
        result = fn(result, nums[index]) 
  
        
    }
    return result

};

console.log(reduce(nums, fn, init));
