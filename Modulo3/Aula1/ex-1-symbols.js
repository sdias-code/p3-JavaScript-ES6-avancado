
//é um indentificador único
const uniqueId = Symbol();
console.log(uniqueId);

const obj = {
    [uniqueId]: 'Hello'
};

console.log(Object.getOwnPropertySymbols(obj));

//