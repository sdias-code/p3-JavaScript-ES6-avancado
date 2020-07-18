
//adicionar objetos - usar {}
var createObj = () => ({teste: 10});
console.log(createObj());

function Car(){
    this.portas = 4;
}
console.log(new Car());

// //erro não funciona
// var Moto = () => {
//     this.rodas = 2;
// }
// console.log(new Moto());

//Arrow functions não funciona hoisting
