const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = number.slice(2, 5);
const part2 = number.splice(2, 4, 99, 55);
const part3 = number.join(',,');

console.log(number);
// console.log(part);
console.log(part2);
console.log(part3);
