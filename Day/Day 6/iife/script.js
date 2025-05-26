const user ='john';

(
    function (){
        const user ='john';
        console.log(user);
    }
)();

(function(name){
    console.log('Hello' + name)
    })(shawn);