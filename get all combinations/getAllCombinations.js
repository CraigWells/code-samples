function GetAllCombinations(e, state, id){
	// DECLARE GLOBAL SCOPE VARIABLES
	var a = 0, 
		b = 0, 
		c = 0, 
		d = (e+1),
		results = [],
		resultsString;

	// CHECK THAT THE ARGUMENTS PASSED TO THE FUNCTION ARE VALID 
	if((e && e >0) && isValidState(state)){
	// LOOP THROUGH ALL COMBINATIONS OF TWO NUMBERS
	// THAT WHEN ADDED TOGETHER RESULT IN e	
		while(a < d){
			while(b < d){
				if(a + b == e){
					var result = {x:a,y:b};
					results.push(result);
				}
				b++;
			}
			a++;
			b = 0;
		};
		resultsString = JSON.stringify(results);
	// RENDER TO DOM OR CONSOLE
		return render();
	// IF THE CORRECT ARGUMENTS HAVE NOT BEEN PASSED TO THE FUNCTION
	// DISPLAY AN ALERT DIALOG WITH AN INSTRUCTIVE MESSAGE
	}else{
		alert("A valid integer greater than 0 and a state must be passed to the function. A valid state can be either \"console\" \(to log the results to the console\), \"dom\" \(to render the output to the current web document\), or \"array\" to return a javascript array from the function. When the state \"dom\" is used a third id parameter may be passed. If the id parameter is passed with the \"dom\" state the resulting combinations will be rendered to the first dom element with a matching id. If no valid id is passed with the \"dom\" state, the resulting combinations will be appended to the body element.");
	};

	// CHECK THAT THE STATE ARGUMENT IS VALID
	function isValidState(state){
		var isValid = false;
		switch(state){
			case "console": isValid = true;
			break;
			case "dom": isValid = true;
			break;
			case "array": isValid = true;
			break;
			default:
			break;
		}
		return isValid;
	};

	// RENDER THE CORRECT STATE METHOD
	function render(){
		var renderer = {
			console : (function(){
				console.log(resultsString);
			}),
			dom : (function(){
				var element = document.body;
				if(id && idIsValid()){
					element = document.getElementById(id);
				}
				element.innerHTML += resultsString;
			}),
			array : (function(){
				return results;
			})
		};
		return renderer[state]();
	};

	function idIsValid(){
		var idIsValid = false;
		var element = document.getElementById(id);
		if(element){
			idIsValid = true;
		};
		return idIsValid;
	};

};