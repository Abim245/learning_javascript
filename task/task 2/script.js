const x =Math.tofloor(Math.random()*100+1);
const y =Math.tofloor(Math.random()*50+1);

const sum = x+y;
sumOutput = '${x}+${y}=${sum}';

const pro = x*y;
proOutput = '${x}*${y}=${pro}';

const diff = x-y;
diffOutput = '${x}-${y}=${diff}';

const qout = x/y;
qoutOutput = '${x}/${y}=${qout}';

const rm = x%y;
rmOutput = '${x}%${y}=${rm}';

console.log(sumOutput);
console.log(proOutput);
console.log(diffOutput);
console.log(qoutOutput);
console.log(rmOutput);

console.log(x);
console.log(y);