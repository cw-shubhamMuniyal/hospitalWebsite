



function aged()
{
	{
    var inpObj = document.getElementById("age_");
    if (!inpObj.checkValidity()) {
        alert(inpObj.validationMessage);
    } 
}


function forms_() 
	{
    var z = document.forms["myForm"];
	var j;var txt="";
	for( j=0;j<z.length-1;j++)
	 txt+=z.elements[j].value+"br";
	document.getElementById("1").innerHTML = txt;
	
	
	
   
}

