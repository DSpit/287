function foo_slice(){
	var original = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	var sliced = original.slice(2, 9);
	
	console.log("Origional Array");
	original.forEach(function (item, index, array){
		console.log(item);
	});
	
	console.log("New Array");
	sliced.forEach(function (item, index, array){
		console.log(item);
	});
}

function foo_join(){
	var colors = ["Red", "Green", "White", "Black"];
	
	console.log(colors.join());
	console.log(colors.join("."));
	console.log(colors.join("+"));
}

function gather_info(){
	var first_name = document.contact_info.f_name.value;
	var last_name = document.contact_info.l_name.value;
	var phone = document.contact_info.phone.value;
	
	document.getElementById("output").innerHTML = "<p>Name: " + first_name + " " + last_name + "<br />Phone: " + phone + "<p>";
}