window.alert('hello');
console.log(innerWidth);

function run(){
    console.log(window.innerWidth);
}

run();

//global variable

const x=100;

if (true){
    console.log(x,'in block');
}

function add (){
    const y =50;
    //not a global variable
    console.log(x+y);
}

add();