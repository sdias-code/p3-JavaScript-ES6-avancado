//EventEmitter

const Eventemitter = require('envents');

class Users extends Eventemitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();
//users.once - executa apenas o primeiro comando
users.on('User logged', data => {
    console.log(data);
});

users.userlogged({ user: 'Roberto Aroldo'});
