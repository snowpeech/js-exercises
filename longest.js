var sentence = "what a beautiful fantastical day";
var long;

function longest(string){
	var obj = string.split(" ");
    var stringLength = [];

	for (var i = 0; i < obj.length; i++){
        stringLength.push(obj[i].length);
	}

    var longIndex = Math.max.apply(Math,stringLength);

    console.log(obj[stringLength.indexOf(longIndex)]);

}

longest(sentence)