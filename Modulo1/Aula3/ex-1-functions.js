
//ES6 atribuir valor ao parametro
// function multiplicar(a, b = 1){
//     return a * b;
// }

// console.log(multiplicar(5));

//Lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}

function multiplicar(a, b = randomNumber()){
    return a * b;
}

console.log(multiplicar(5));
