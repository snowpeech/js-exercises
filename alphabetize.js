var word = "andrew";

function alph(word){
	var arrayed = word.split("");
	var newArray = arrayed.sort();
	var alphabetized = newArray.join("");
	return alphabetized;
}

