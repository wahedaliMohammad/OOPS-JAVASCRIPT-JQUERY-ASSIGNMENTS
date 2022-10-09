
let word =  String(prompt('enter a word'))
let capWord = word.toUpperCase();
let vowels = ["A","E","I","O","U"];
let counter=0;
let partition = capWord.split("");

for(let i=0; i< capWord.length; i++){
    for (let j=0; j<vowels.length; j++){
        if(capWord[i]== vowels[j]){
             counter++;
        
            }

    }
}

console.log("vowels present in " + word + " are: " + counter);
