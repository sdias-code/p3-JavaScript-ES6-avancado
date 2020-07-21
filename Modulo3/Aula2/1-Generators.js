// Generators

function* hello(){
    console.log('Hello');
    yield 1;

    console.log('from');
    const value = yield 2;

    console.log('Function');

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Saída!'));