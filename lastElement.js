var items1 = ['one','two','three','four','five','six','seven'];
var items2 = "A really long string";
var items3 = [[1,2,3],['one','two'],[true,false,true]]


function lastElement(thing){
	var len = thing.length -1;

	console.log(len);
	// if(typeof thing[len] == 'object'){
	// 	lastElement(thing[len]);
	// }
	console.log(typeof thing[len]);
	console.log(thing[len]);	
}