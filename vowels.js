var word = 'tacocati';

function vowels(word){
    var arr1 = [];
    var vowelArr = [];
    arr1 = word.split("");
    console.log(arr1)
    //find vowels
        function checkVowel(letter) {
            return letter == "a" ||  letter == "e" || letter == "i" || letter == "o" || letter == "u"
        }
    vowelArr = arr1.filter(checkVowel) ;
    console.log(vowelArr)
    console.log(vowelArr.length)
}

vowels(word);