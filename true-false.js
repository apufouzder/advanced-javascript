// Falsy values
// ""
// undefined
// 0
// NaN
// null
// false

//Truthy
// " ", [], "0", {}, true

const name = 12;
console.log(name);
if(name || name == 0){
    console.log('condition is true');
} else{
    console.log('condition is false');
}