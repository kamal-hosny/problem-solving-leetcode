function squareDigits(num){
if(Number.isInteger){
    let arr = Array.from(String(num))
    
return Number(arr.map((x) => x ** 2).join(""));
}

    
}

console.log(squareDigits(9119));
console.log(squareDigits(765));
