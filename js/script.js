function validate() {
	
	var n=document.getElementById("name").value;
	var p=document.getElementById("price").value;
	var date=document.getElementById("datetime").value;
	var fd=document.getElementById("fd").checked;
	var ys=document.getElementById("Yes").checked;
	var no=document.getElementById("No").checked;
	if(n.length===0 || p.length===0 || date.length===0||(!fd)|| (ys===0 && no===0)){
		
		window.alert("Required Fields are Empty");
	}
	else{
		window.alert("Edit Successful");
	}
	return false;
}
