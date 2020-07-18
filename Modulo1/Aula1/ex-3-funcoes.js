
// var obj = {
//     showContext: function showContext(){
//         this.log('teste');

//         setTimeout(
//             function(){
//                 console.log(this);
//         }.bind(this), 1000);
//     },
//     log: function log(value){
//         console.log(value);
//     }   
//     };
//     obj.showContext();

    var obj = {
        showContext: function showContext(){            
    
            setTimeout(() => {
                    this.log('after 1000ms');
            }, 1000);
        },
        log: function log(value){
            console.log(value);
        }   
        };
        obj.showContext();    
