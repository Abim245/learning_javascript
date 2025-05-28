const x=  (10>20 && 30>15);
console.log(x);

let a;
a= 10&&20;
a= 10&&20&&30;
a=10&&0&&30;
a=10&&""&&30;

console.log(a);

const post = ['post 1','post 2'];

console.log(post[0]);

let b;
b = 10||20;
b= 0||20;
b = 0||null;
b=0||undefined;

console.log(b);

let c;
c= 0??20;
c = null??30;
c= undefined??30;
c=0??30;

console.log(c);