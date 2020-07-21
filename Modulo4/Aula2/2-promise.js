const myPromisse1 = () => new Promise((resolve, reject) =>{
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);
});

const myPromisse2 = () => new Promise((resolve, reject) =>{
    //throw new Error('Simulando um error');
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

myPromisse1()
.then(data => {console.log(data.split('')); return myPromisse2()})
.then(data2 => console.log(data2.split('')))
.catch( error => console.log('Erro: ', error));