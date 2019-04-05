var word = 'tacocat';
var word2 = "Madam I'm Adam";

function palindrome(word){
    var newWord='';
    for (var i =word.length-1; i>=0; i--){
        //console.log(word[i])  
        newWord += word[i];
    }
    console.log(newWord);
    
    console.log(newWord == word)
} 

palindrome(word)
palindrome(word2)