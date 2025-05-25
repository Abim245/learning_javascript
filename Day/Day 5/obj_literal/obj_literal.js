//object literal holds value and key.
let x ;
const person ={
    name :'Binta',
    age : 20,
    location:'Abuja',
    is_admin : true,
    address:{
        state:'Abuja',
        city :'wumba',

    },
    hobbies:{
        swimming,
        cooking,
    },
}

x=person.name;
x=person['age'];
x=person.address.city;
x= person.hobbies[1];

person.name = 'Amir';
person.is_admin=false;

//remove item
delete person.age;

//add function
person.hasChildren = true;

//function
person.greet = function (){
    console.log(`Hello my name is ${this.name}`);
}

person.greet();

const person ={
    'firstName':'Binta',
    'lastName':'Abimiku',
}
x= person['firstName'+'lastName'];
console.log(x);
