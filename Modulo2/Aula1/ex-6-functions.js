
const obj = { test: 123};
const obj2 = {test: 456};

const obj3 = {
    ...obj,
    ...obj2 //o ultimo objeto que prevalece
}

console.log(obj3); //{ test: 456 }

obj2.test = 55;
console.log(obj3); //{ test: 456 }
