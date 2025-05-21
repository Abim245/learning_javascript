let d;

d= new Date();
d= d.toString();

//specific date
d = new Date("2021,6,10");

d = new Date("2021-07-10 12:30:00");
d = new Date("2021/07/10 12:30:00");

//timestamp

d = Date.now();
d=d.getTime();
d= d.valueOf();
d= Math.toFloor(Date.now/1000);

console.log(d); 

//date object method

let x;

x=d.toString();
x=d.getTime();
x=d.valueOf();
x=d.getFullYear();
x=d.getMonth();
x=d.getDate();
x=d.getHour();
x=d.getMinutes();
x=d.getSeconds();

x=Intl.DateTimeFormat('en-us').format(d);

console.log(x);