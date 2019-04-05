var word1 = 'finder';
var word2 = 'Friend';

//add second word to function below

function anagram(first,second){
    //lowercase string
    var arr1 = [];
    arr1 = first.toLowerCase().split("").sort();
    var arr2 = [];
    arr2 = second.toLowerCase().split("").sort();

    console.log(arr1)
    console.log(arr2)
    console.log(arr1.join("") == arr2.join(""))
}

anagram(word1,word2)