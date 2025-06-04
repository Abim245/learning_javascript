const itemInput = document.getElementById('item-input');

itemInput.addEventListener('key press',onkeypress);

const onkeypress = ()=>{
    console.log('key press');
}

itemInput.addEventListener('key up',onkeyup);

const onkeyup = ()=>{
    console.log('key up');
}

itemInput.addEventListener('key down',onkeydown);

const onkeydown = ()=>{
    console.log('key down');
}