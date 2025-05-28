const d=new Date(2022,1,10,8,0,0);
const month = d.getMonth();
const hour = d.getHours();

switch(month){
    case 1:
    console.log('january');
    break;
    case 2:
        console.log('feburary');
        break;
    default:
        console.log('not jan or feb');
}