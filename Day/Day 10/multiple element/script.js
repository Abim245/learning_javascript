//query selector all

const listItem = document.querySelectorAll('.item');

console.log(listItem[1].innerHTML);

//wrong
listItem.style.color = 'red';

//right
listItem.forEach((item)=>{
    item.style.color = 'red';
})

if (index===1){
    item.remove();
}
if (index ===0){
    item.innerText = 'orange';
}

const listItem2 = document.getElementsByClassName('item');

console.log(listItem2(2).innerText);

//convert array

const listItem3 = Array.from(listItem3);