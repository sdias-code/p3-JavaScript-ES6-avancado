
const arr = [1,2,3,4,5];

const it = arr[Symbol.iterator]();

while(true){
    let {value, done} = it.next();
    console.log(value);
    
    if(done){
        break;
    }
}


