function alphabetPosition(text) {
const myArray = text.split('')
const filter = myArray.filter((x) =>  x.match(/[a-zA-Z]/))
const convertToNum = filter.map((x) => x.toLowerCase().charCodeAt() - 96)

    return convertToNum.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
