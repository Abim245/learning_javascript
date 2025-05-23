//nesting

let x;
const fruit = ['mango', 'pawpaw', 'grape', 'cashew' ];
const orange = ['orange' ,'lime' , 'lemon'];

fruit.push(orange);

x=fruit;

const allfruit = [fruit,orange];
x=allfruit;

//concat: add to spread idea on the same array
 x= fruit.concat(orange);


 //spread operator ...

 x =[...fruit,...orange];

 //flaten array

 const arr =[1,2,3,4,5];
  x= arr.flat();

  // static methods on array

  x =Array.isArray(Number);
  x =Array.from('1,2,3,4,5,6,7');

  const a =5;
  const b=3;
  const c =6;

  x =Array.of(a,b,c);
console.log(x);