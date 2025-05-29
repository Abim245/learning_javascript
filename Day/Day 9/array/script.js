// //for each

// const socials =['fb','ins','x'];

// socials.forEach(function(item){
//     console.log(item);
// })

// socials.fill.forEach

// //array filter

// const number = [1,2,3,4,5,6,7,8,9];

// const even=number.filter(function (number){
//         return number%2 ===0;
// });
// console.log(even);

// //short hand
// const even1 = number.filter(number => number%2 ===0);
// console.log(even1);
// //with foreach

// let even2=[1,2,3,4,5,6,7];
// numbers.forEach(number =>{
//     if (number%2===0)
//     even.push(numbers);
//     console.log(even2);
// })

//array map
const numbers =[1,2,3,4,5,6];

const doubleNumbers = numbers.map(number=>numbers*2);

console.log(doubleNumbers);

//same with for each

const doubleNumbers2 =[1,2,3,4,5,6,7];

numbers.forEach(numbers=>{
    doubleNumbers2.push(number*2);
})

console.log(doubleNumbers2);

//array reduce

//use to reduce array down to value

const num = [1,2,3,4,5,6,7,8,9];

const sum = num.reduce(accumulator,currentValue);
{
    acc,cur,0
}

//for loop

const sum1 = ()=>{
    let acc=0;
    for(const number of numbers){
        acc+cur;
    }return acc;;
}

console.log(sum(0));