let x;

const num=new Number(5);
x=num.toString().length();
//to add decimal
x= num.toFixed(2);
x= num.toPrecision(2);
x=num.toExponential(2);
x = num.toLocaleString('en-us');

console.log(num);

x=Number.MAX_VALUE(9,7);
x=Number.MIN_VALUE(7,9);