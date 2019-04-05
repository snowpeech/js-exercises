var sentence = "what a beautiful day"

function capitalize(string){
	var obj = string.split(" ");
	console.log(obj)
	for (var i = 0; i < obj.length; i++){
		obj[i] = obj[i].charAt(0).toUpperCase() + obj[i].substr(1)
	}

	console.log(obj.join(' '));

}

capitalize(sentence)