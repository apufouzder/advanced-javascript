const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < number.length; i++){
    if(number[i] > 5){
        break;
    }
    console.log(number[i]);
}


const number1 = [1, -2, 3, -4, 5, -6, 7, -8, 9];

for(let i = 0; i < number1.length; i++){
    if(number1[i] < 0){
        continue;
    }
    console.log(number1[i]);
}