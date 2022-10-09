function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let initialNumber=[];
  let finalNumber=[];
  for (let index = 0; index < 5; index++) {
    initialNumber[index] = prompt('enter the numbers')
    console.log('numbers before factorial are : ' + initialNumber )
  }

  for (let index2 = 0; index2 < 5; index2++) {
     finalNumber[index2] = factorial(initialNumber[index2])
     console.log("after factorial" +finalNumber)
  }
  