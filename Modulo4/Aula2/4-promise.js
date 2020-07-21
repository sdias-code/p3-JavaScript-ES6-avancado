const myPromisse1 = () => 
new Promise((resolve, reject) => {
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1500);
});

const myPromisse2 = () => 
new Promise((resolve, reject) => {
    //throw new Error('Simulando um error');
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

Promise.race([myPromisse1(), myPromisse2()])
.then(data => console.log(data));

