`use strict`
let arrNumber=[] ; 
let j=0;

for(let i=0; i<5; i++){

    arrNumber[i] = prompt("enter numbers");
    console.log(arrNumber);
    
}
 for (j=0; j<=arrNumber.length-1;j++){
    if(arrNumber[j]%2===0 ){
        console.log("even number are: " + arrNumber[j]);
    }

 }

    
