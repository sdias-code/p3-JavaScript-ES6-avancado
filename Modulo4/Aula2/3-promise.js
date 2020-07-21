const myPromisse1 = () => 
new Promise((resolve, reject) => {
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);
});

const myPromisse2 = () => 
new Promise((resolve, reject) => {
    //throw new Error('Simulando um error');
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

// Promise.all([myPromisse1(), myPromisse2()])
// .then(data => console.log(data));

Promise.all([myPromisse1(), myPromisse2()])
.then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});

