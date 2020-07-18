var obj = { 
    nome: 'Carlos',
props: {
    age:20
}
};

//Destructuring Assigment

var {nome} = obj;
var {
    props: {age}
} = obj;

console.log(nome);
console.log(age);

