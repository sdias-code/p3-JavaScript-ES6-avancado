
function log(value){
    console.log(value);
}
log('José Ribeiro');

//funcao sem nome
const imprimeNome = function(nome){
    console.log(nome);
}

imprimeNome('Marta Santana');

var soma = function(n1, n2){
    return console.log(n1 + n2);
}

soma(10,20);

//funcões anonimas - Arrow functions
var sum = (n1, n2) => console.log(n1 + n2);

sum(15, 20);

//obs. se a função só tiver um argumento os parenteses podem ser omitidos
var idade = (idade) => {
    if(idade >= 18){
        return console.log('Você é de maior. Idade digitada:', idade);
    } else{
        return console.log('Você é de menor. Idade digitada:', idade);
    }
}

idade(25);

