console.log(document.getElementById("apt-title"));

console.log(document.getElementById('id'));

//get attribute
document.getElementById('apt-tile').title ;
document.getElementById.getAttribute('class','title');

const title = document.getElementById('apt-title');

console.log(title);

//change content

console.log(title.textContent);
title.textContent='Hello world';
title.innerText ='Hello again';

title.innerHTML = `<strong> shopping list</strong>`;

//change style
title.style.color = 'red';
title.style.padding = '10px';
title.style.border = '10px';


//document query selector

console.log(document.querySelector('hi'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type=text]'));
console.log(document.querySelector('li:nth-child(2.innerText)'));

//variable
const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'apt-title';
secondItem.style.color = 'red';

//use the method on the other end
const int = document.querySelector('id');

console.log(int);

const item = List.querySelector('li');
firstItem.style.color = 'blue';
