// Generators

const uniqueId = Symbol('Hello');

//Well know symbols
Symbol.iterator;
// Symbol.split;
// Symbol.toStringTag;

const arr = [1, 2, 3, 4, 5];
const str = 'Curso de Javascript';

// Generators
const obj = {
    values: [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of obj){
    console.log(value);
}


