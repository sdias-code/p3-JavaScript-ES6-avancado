//ES7 - Async / Wait

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('12345');
    }, 1000);
})

const simpleFunc = async () => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    console.log(data);
    return data;
};

console.log(simpleFunc()
.then(data => console.log(data))
.catch(error => console.log(error)));
