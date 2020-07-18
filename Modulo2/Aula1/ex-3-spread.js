// Spread
// Spread vai espalhar os parâmetros passados pelo …argumento 
// em uma chamada de função ou um array

function somarElementos(a, b, c) {
    console.log(a + b + c);
}
let elementos = [1,5,14]; 
somarElementos(...elementos); // 20
let itensDaLista = ['trigo', 'batata'];
let listaDeCompras = ['banana', ...itensDaLista, 'arroz', 'maçã', 'chocolate'];

// (6) ["banana", "trigo", "batata", "arroz", "maçã", "chocolate"]
console.log(listaDeCompras); 
