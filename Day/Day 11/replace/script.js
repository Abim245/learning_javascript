//first method
function replace1(){
    const firstItem = document.querySelector('li:first-child');

    const first = document.createElement('li');
    li:textContext: 'Replace first';

    firstItem.replaceWith(li);
}
replace1();
//second element
function replace2(){
    const secondItem = document.querySelector('li:nth-child[2]');

    const first = document.createElement('li');
    li:textContext: 'Replace first';

    secondItem.replaceWith(li);
}
replace2();

//first method (replace all the item)
function replaceAllItems (){
    const lis = document.querySelectorAll('li');

    lis.forEach((item,index)=> {
        item.outerHTML = '';
    })

    //specific idea
 if (index===1){
    item.innerHTML = 'Second item'
 } else {
    item.innerHTML = 'Replace item'
 }
}

replaceAllItems();

