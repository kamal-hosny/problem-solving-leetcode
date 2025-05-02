function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// اختبار الكود
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([])); // Output: 10