//Definindo valores a propriedades
var prop1 = 'Digital Innovation One';

var obj = {
    //prop1: prop1 - pode omitr a propriedade do lado direito
    prop1
};

//console.log(obj);

function exibirNome(nome){
    console.log(nome);
}

var obj2 = {
    prop1,
    exibirNome
}

obj2.exibirNome('Lucas Souza');
