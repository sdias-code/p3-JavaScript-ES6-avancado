
//rest operator - pega todos os parametros de uma função e transforma num array
//spread operator ... - pega todos os itens e transforma em parametros
//utilizado em strings, arrays, objects e objetos iteraveis

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

// const sum = (...rest) => {
//     return multiply.apply(undefined, rest);
// };

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5,5,5,2,3));
