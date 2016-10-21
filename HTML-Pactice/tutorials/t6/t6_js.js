/**
 * 
 */

function foo(){
	var input = document.exchange.amount.value;
	var conversion = document.exchange.conversion.value;
	
	if(conversion == "usd"){
		document.getElementById("result").innerHTML = "Result: " + input * 1.37 + "$";
	}else{
		document.getElementById("result").innerHTML = "Result: " + input * 0.72 + "$";
	}
	/*
	switch(conversion.selectedValue){
		case 0:
			output.innerHTML = "Result" + (input * 1.32);
			break;
			
		case 1:
			output.innerHTML = "result" + (input * 0.76);
			
			break;
	}
	*/
}