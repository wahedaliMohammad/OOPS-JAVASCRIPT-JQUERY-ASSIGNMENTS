let word, newWord;                              //variabword for storing input from user and newWord to store reversed word
word = String(prompt("enter the string"));

newWord=word.split("").reverse().join("");      // first word will be splitted using inbuilt split function . secondly, splitted word will be reverse and finally we joi all the splitted words to rejoin using inbuilt function.

console.log("reverse of "+ word + " is = "+ newWord); // printing the reversed word.