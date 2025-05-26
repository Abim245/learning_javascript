//default param

function registerUser(user){
    if (!user) {
        user ='Bot';
    }
    return user ;
}

console.log(registerUser('john'));

//rest parameter
// function sum(...numbers){
//     //return number for loop
//     let total =0;
//     for 
//     (const numOfNumbers);
//     total += numOfNumbers;
// }

// return total;
// console.log(sum(1,2,3,4,5,6,7,8));

//object as parameter

function loginUser(user){
    return `the user ${user.name} with the id of ${user.id} is logged in`;
}

const user ={
    id:0,
    name:'binta',
};
console.log(loginUser(user));

//array as parameter
function getRandom(arr){
    const randomIndex = Math.floor(Math.random*arr.length);

    const item = arr[random_index];

console.log(item);
}


getRandom([1,2,3,4,5,6,7,8,9,10]);
