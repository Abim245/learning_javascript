while (i){
  let i =0;
  while(i===20){
    console.log('Number'+i)
  }
  i++
}

//loop over array
const arr = [10,15,20,25];

while (i<arr.length){
    console.log(arr[i]);
    i++;
}

//nesting while loop
while (i<=5){
    console.log('number'+i);
    
    let j=2;
    while(j<=4){
        console.log(`${i}*${j} is eual to ${i*j}`);
        j++;
    }
    i++;
}

//do while loop
 do {
    console.log(Number + i);
    i++;
 }while(i<=20);