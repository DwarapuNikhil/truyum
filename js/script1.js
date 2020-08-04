function validate(){
var nme=document.getElementById("menu-name");
var price=document.getElementById("numbe").value;
var date=document.getElementById("date").value;




if(date!==0 && nme.length!===0 && price!==0 )
	alert("The item is valid");
else
	return false;

}