let output;

//get child element

const parent = document.querySelector('.parents');
output = parent.children;
output = parent.children[1];
output = parent.innerText;
output = parent.className;
output = parent.nodeName;

parent.children[1].innerText = 'Rice';
parent.children[1].style.color ='red';

parent.firstElementChild.innerText = 'children';

//parent element from child
const child = document.querySelector('.child');

output = child.parent();
output = child.parent.style.color;


//siblings element
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output =secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'yellow';
