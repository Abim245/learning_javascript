function first(){
    const x=10;
    function second(){
        const y =100;
        console.log(x,y);
    }
    second();
}
first();

if(true){
    const x=100;
    if (x==100){
        const y=200;
        console.log(x+y);
    }
}