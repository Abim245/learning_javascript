function onClear (){
    alert('item clear');
}

//event listener
const clear = document.querySelector('#clear');

clear.onClear;

function  onClear(){
    alert('clear all');
}

//add event listener
clear.addEventListener('click', ()=>
    alert('clear all')
);
setTimeout(()=>
clear.click(),5000);

function onClear(){
    const itemList = document.querySelector('ul');
    itemList.innerHTML = 'hello';
}

while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
}