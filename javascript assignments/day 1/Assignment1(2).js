
let reverse=0,rem;
number = window.prompt('enter a multi digit number')
while(number!==0)
{
    rem = number % 10;
    reverse = (reverse * 10) + rem;
    number =  parseInt(number / 10);
    
}
console.log("reverse = " + reverse);





