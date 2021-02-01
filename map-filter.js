const numbers = [3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);



const number2 = [3, 4, 5, 6, 7, 8, 9];

function square (element) {
    return element * element;
}

const result = number2.map(function (element) {
    return element * element;
});
console.log(result);

const square = element => element * element;
const square = x => x * x;

const result = number2.map(function (element, index, array) {
    console.log(element, index, array);
})

const result2 = number2.map(x => x * x);
console.log(result2);

// filter
const bigger = number2.filter(x => x < 5);
console.log(bigger);

// find
const isThere = number2.find(x => x > 5);
console.log(isThere);