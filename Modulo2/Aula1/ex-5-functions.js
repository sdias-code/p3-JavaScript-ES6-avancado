//exemplo2 spread
const str = 'Digital Innovation One';

function logArgs(...args){
    //console.log(args);
    console.log(arguments);
}

logArgs(...str);
