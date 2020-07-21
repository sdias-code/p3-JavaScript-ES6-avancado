fetch('/data.json', {
    method: 'post',
    body: JSON.stringify(value)
})
.then(responseStream => {
    if( responseStream === 200){
        return responseStream.json();
    } else{
        throw new Error('Request error');
    }
    })
    .then( data => console.log(data))
    .catch(err => console.log('Erro: ', err));

