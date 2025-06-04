//quick and dirty inner html
function  createElement (){
    const li = `<li>${'.item'} </li>`;
    appendChild(li);
}

document.querySelector('.items').appendChild(li);

//correct
const li = document.createElement('li');

li.innerHTML = `${item}  <button>email</button>
    </form>

    <button></button>`;

document.querySelector('items').appendChild(li);

//clean and performance

function createElement (){
   const li = document.createElement('li');
   const button = document.createElement('button');
   button.className = ` <button>email</button>
    </form>

    <button></button>`;

    console.log(button);
    const numbers = document.createElement(li)
    isSecureContext.className = ('my-title');

    li.appendChild(document.createTextNode(items));
    button.appendChild(icon);

    li.appendChild(button);

    console.log(li);

    document.querySelector(isSecureContext.appendChild(li));
    
}
  
