// // for loop
// //standard for an array

// const items = ['book','table','chair'];

// for (let i=0; i<items;i++){
//     console.log(items[1]);
// }

// //simpler way
// for (const item of items){console.log(item)};

// //object array
// const name = [
//     {name:'john'},
//     {name:'bob'},
//     {name:'joy'},
// ];

// for (const name of names){
//     console.log(name.names);
// }

// //loop over string
// const str ='HelloWorld';

// for (const letter of str){
//     console.log(letter);
// }

// //loop over maps

// const map = new Map();
// Map.set('name','john');
// Map.set('age',31);

// for (const [key,value ]of map){
//     console.log(key,value);
// }

//for in loop
const colorObj = {
    colour:'red',
    colour:'blue',
    colour:'green',
}

for (const key in colorObj){
    console.log(colourObj.key);
}

const colorArr=['red','blue','green'];

for(const key in colorArr){
    console.log(colorArr(key));
}