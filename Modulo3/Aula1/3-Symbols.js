const arr = [1, 2, 3, 4, 5];

//Well know symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// for (let value of arr){
//     console.log(value);
// }

console.log('->', arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {}
}