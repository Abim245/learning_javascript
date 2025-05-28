const d= new Date(10,1,2020,8,0,0);
const hours = d.getHours();

console.log(hours);

if (hours<12){
    console.log('good morning')
}else {
    console.log('good afternoon')
}