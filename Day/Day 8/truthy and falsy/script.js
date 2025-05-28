const { Children } = require("react");

const email ='email@gmail.com';

if (email){
    console.log('you passed an email');
}

//falsy value
//false
//'', or empty string
//null
//undefined
//Nan

const x= false;
if (x){
    console.log('this is true');
}else{
    console.log('this is false');
}

//truthy value
//everything that is not false
//true
//'0' string
//' ' space
//'false'
//[] array
//{} object
// function (){}

const children = 0;
if (children){
    console.log(`you have ${Children} children`);
}else{
    console.log('please enter number of children');
}