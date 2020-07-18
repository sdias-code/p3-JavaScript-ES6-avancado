// Rest
//Enquanto Rest vai reunir todos os parâmetros passados para 
//uma função em um array

function testandoRest(a, b, ...theArgs) {
    console.log(a, b, theArgs); // 1, 2, [3,4,5]
}
testandoRest(1, 2, 3, 4, 5);
function testandoRest2(...theArgs) {
    console.log(theArgs); // [1,2,3,4,5]
}
testandoRest2(1, 2, 3, 4, 5);
