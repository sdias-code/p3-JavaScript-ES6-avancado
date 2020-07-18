// metodo anterior ao ES6
// function sum(a, b){
//     var value = 0;

//     for( var i=0; i< arguments.length; i++){
//         value += arguments[i];
//     }
//     return value;
// }

// console.log(sum(3,2,5,5,10));

//rest operator ...
// function sum(...args){
//    return args.reduce((acc, value) => acc + value, 0);
// }

// console.log(sum(3,2,5,5,10));

// const sum = (...args) =>{
//     return args.reduce((acc, value) => acc + value, 0);
//  }
 
//  console.log(sum(3,2,5,5,10));

//ignora os dois primeiros argumentos a, b
 const sum = (a, b, ...args) =>{
    console.log(a, b, args);
 }
 
 console.log(sum(3,2,5,5,10));
