function remove (){
    const clear = document.querySelector('#clear').remove();
}

function removeFirstItem (){
    const ul = document.querySelectorAll(ul);

    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}

function removeItem (){
    const ul = document.querySelector('ul');

    const li = document.querySelector('li');
    li[itemNumber -1].remove();
}

//short form
const removeItem2 = ((itemNumber)=> document.querySelectorAll[itemNumber-1].remove());

remove.clearBotton();
remove.firstItem();
remove.secondItem();
remove.thirdItem();