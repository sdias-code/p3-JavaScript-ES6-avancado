
const uniqueId = Symbol('Hello');

//Well know symbols
Symbol.iterator;
// Symbol.split;
// Symbol.toStringTag;

const arr = [1, 2, 3, 4, 5];
const str = 'Curso de Javascript';

const obj = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

for (let value of obj){
    console.log(value);
}

const arr2 = [...obj];
console.log('->', arr2);