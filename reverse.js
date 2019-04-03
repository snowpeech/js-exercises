<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div>
		Input: <input type="text" id="inputValue">
		<input type="button" id="btn" value="Reverse Me">
	</div>

	<script type="text/javascript">
		var btn = document.querySelector("#btn");

		function reverse(inValue){
			if (typeof inValue == "number"){
				inValue = inValue.toString();
			}

			var string = 'inValue';
			var reversed = "";
			for (var i = inValue.length - 1; i >= 0; i--) {
				console.log(inValue[i]);
				reversed += inValue[i];
				}
				console.log(reversed);
			}

		btn.addEventListener("click", reverse);

		// function convert(inValue) {

		// 	if (typeof inValue == "number"){
		// 		var string = 'inValue';		
		// 	}
		// 	else{
		// 		var string = inValue;
		// 	}
		// }

	</script>

</body>
</html>


