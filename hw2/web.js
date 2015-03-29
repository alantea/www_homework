document.getElementById("xmlform").onsubmit = function()
{
	var url = document.getElementById("xmlurl").value;
	// check the url is empty
	if( url == "" || url == null )
	{
		alert("Error. Please input XML url.");
		return false;
	}
	
	if (window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{	// for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	// check the XML is correct
	/*
	if( xmlhttp.readyState != 4)
	{
		alert("Can't send xml file");
		return false;
	}
	if ( xmlhttp.status != 200)
	{
		alert("Error in XML file2.");
		return false;
	}
	*/
	xmlDoc = xmlhttp.responseXML;
	var newWindow = window.open("", "", "width=800, height=600");

	// header
	newWindow.document.write( "<!DOCTYPE html>\n<html><head><meta charset=\"utf-8\"></head><body>" );
	
	var data_food = xmlDoc.getElementsByTagName("food");
	/*
	for( i = 0 ; i < data_food.length ; i++ )
	{
		newWindow.document.write("<div class=\"foodname\">" + data_food[i].getElementsByTagName[0].childNodes[0].nodeValue + "</div>");
	}
	*/

	/* start to write data */
	xmlhttp.onreadystatechange = function()
	{
		/* Food menu */
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			newWindow.document.write( "Write data" );
		}
	}

	// footer
	newWindow.document.write( "</body></html>" );
	


	// prever the page data lose
	return false;
}

document.getElementById("xslurl").onclick = function()
{

	var newWindow = window.open("", "", "width=800, height=600");

	// prevent to next page
	return false;
}
