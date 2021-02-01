// global variable
var bonus = 15;

function sum(first, second){
    let result = first + second + bonus;
    if(result > 9){
        let mood = "Happy";
        console.log(mood);
        // console.log(bonus);
    }
    // console.log(mood);
    let day = "Friday";
    console.log(day);
    return result;
}
console.log(bonus);
const total = sum(10, 20);
console.log(total);
