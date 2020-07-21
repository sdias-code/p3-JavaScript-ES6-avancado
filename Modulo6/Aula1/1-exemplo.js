class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}


try{
    console.log(name);
//erro const e let antes da declaração
//Cannot access 'name' before initialization
const name = 'Rodrigo Souza';

const myError = new CustomError({
    message: 'Custom message on custom error',
    data: {
        type: 'Server eror'
    }
});

throw myError;

} catch(err){
    console.log('Error:', err);
    console.log(err.data);
} finally{
    console.log('Keep going...');
}


