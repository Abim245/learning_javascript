//naming
const firstName='Binta';
const lastName='Abimiku';
const age =20;

const person ={
    firstName,
    lastName,
    age,
}

console.log(person);

//destructing

const todo ={
    id:1,
    title :'Hello'
}

const {id,title}=todo;

//destructing array

const number =[12,23,34,56,67,78,89,90];

const [first , second ,...rest]=number;

console.log(first,second,...rest);