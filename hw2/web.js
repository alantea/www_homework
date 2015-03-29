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
	xmlhttp.open("GET", url);
	xmlhttp.send();
	
	var newWindow = window.open("", "", "width=800, height=600");


	/* start to write data */
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			// header
			newWindow.document.write( "<!DOCTYPE html>\n<html><head><meta charset=\"utf-8\">" );
			newWindow.document.write( "<link rel=\"stylesheet\" type=\"text/css\" href=\"popup.css\"></head><body><center>" );
			
			var xmlDoc = xmlhttp.responseXML;

			/* Food menu */
			newWindow.document.write( "<h1>Food Menu</h1>" );

			var data_food = xmlDoc.getElementsByTagName("food");
			for( i = 0 ; i < data_food.length ; i++ )
			{
				newWindow.document.write("<div class=\"foodname\">" + data_food[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</div>");
				newWindow.document.write("<div class=\"foodprice\">" + data_food[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</div>");
				newWindow.document.write("<div class=\"foodcalories\">(" + data_food[i].getElementsByTagName("calories")[0].childNodes[0].nodeValue + ")</div>");
				newWindow.document.write("<div class=\"fooddescription\">" + data_food[i].getElementsByTagName("description")[0].childNodes[0].nodeValue + "</div>");
			}
			if( data_food.length == 0 )
			{
				newWindow.document.write("<div>No data.</div>");
			}

			/* sport menu */
			newWindow.document.write( "<h1>Sports</h1>" );
		}
		else if (xmlhttp.readyState==4 && xmlhttp.status!=200)
		{
			console.log("Error: "+xmlhttp.status)
		}
		
		// footer
		newWindow.document.write( "</center></body></html>" );
	}

	// prever the page data lose
	return false;
}

document.getElementById("xslurl").onclick = function()
{

	var newWindow = window.open("", "", "width=800, height=600");

	// prevent to next page
	return false;
}
