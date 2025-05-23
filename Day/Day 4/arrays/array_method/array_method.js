let x;

const arr =[1,2,3,4,5,6,7];

arr.push(9);
arr.pop();
arr.unshift(0);
arr.shift();
arr.reverse();

x= arr.includes(20);
x= arr.indexOf(5);
x= arr.slice(1,3);
x= arr.splice(1,3).reverse().toString().charAt();

console.log(x);