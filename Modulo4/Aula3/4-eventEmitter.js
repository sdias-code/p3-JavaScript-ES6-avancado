//EventEmitter

const Eventemitter = require('envents');

const emitter = new Eventemitter();
emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('user logged', { user: 'Roberto Aroldo'});
