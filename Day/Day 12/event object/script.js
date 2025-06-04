const h1 = document.querySelector('h1');

function onclick (e){
    console.log(e.target);
}

function include(e){
    console.log(e.currentlyTarget);
}

document.body.addEventListener(('click',(e)=>{
    console.log(e.target);
    console.log(e.currentlyTarget);
}))