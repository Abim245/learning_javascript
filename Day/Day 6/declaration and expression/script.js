//function declaration

function addDollarSign(value){
    return ('$'+value);
}
console.log(addDollarSign(100));

//function expression
const addPlusSign = function(value){
    return ('+'+value);
}
console.log(addPlusSign(40));

// to string move all the function and declaration to the top.