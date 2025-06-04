const parent = document.querySelector('parent');
output = parent.childNode;

output = parent.childNode[0];
output =parent.childNode[0].nodeName;
output =parent.childNode[0].textContext;
output =parent.childNode[0].innerHTML;

//parent node from the child

const child = document.querySelector('.child');
output =child.parentNode;
child.parentNode.style.backgroundcolor ='#ffff';

//siblings 
const secondItem = document.querySelector('child:nth-child(2)');

output =secondItem.nextSibling;
output = secondItem.previousSibling;
