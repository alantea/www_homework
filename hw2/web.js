var data_football;
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
			newWindow.document.write( "<h1>Sports</h1><table width=\"700\" class=\"sport\">" );
	//		var data_football =  xmlDoc.getElementsByTagName("football");
			data_football =  xmlDoc.getElementsByTagName("football");
			
			for( i = 0 ; i < data_football.length ; i++ )
			{
				foot_team = data_football[i].getElementsByTagName("Team")[0].childNodes[0].nodeValue;
				foot_color = data_football[i].getElementsByTagName("Color")[0].childNodes[0].nodeValue;
				foot_image = data_football[i].getElementsByTagName("Image")[0].childNodes[0].nodeValue;
				
				foot_name = data_football[i].getElementsByTagName("Striker")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
				foot_age = data_football[i].getElementsByTagName("Striker")[0].getElementsByTagName("age")[0].childNodes[0].nodeValue;
				foot_squadnum = data_football[i].getElementsByTagName("Striker")[0].getElementsByTagName("squadnum")[0].childNodes[0].nodeValue;

				foot_manager = data_football[i].getElementsByTagName("Manager")[0].childNodes[0].nodeValue;
				foot_stadium = data_football[i].getElementsByTagName("Stadium")[0].childNodes[0].nodeValue;
				foot_video = data_football[i].getElementsByTagName("video")[0].childNodes[0].nodeValue;

				row1 = "<tr><td colspan=\"6\" style=\"color: " + foot_color + "\"><h1>" + foot_team + "</h1></td></tr>";
				row2 = "<tr style=\"font-weight: bold;background: " + foot_color + "\">"
					 + "<td>Image</td><td colspan=\"3\">Striker</td><td>Manager</td><td>Stadium</td></tr>";
				row3 = "<tr style=\"background: " + foot_color + "\">"
					 + "<td style=\"width: 20%\"><img height=\"75\" src=\"" + foot_image + "\" style=\"padding:10px;\" /></td>"
					 + "<td style=\"width: 20%\">" + foot_name + "</td><td style=\"width: 10%\">" + foot_age + "</td>"
					 + "<td style=\"width: 10%\">" + foot_squadnum + "</td><td style=\"width: 20%\">" + foot_manager + "</td>"
					 + "<td style=\"width: 20%\">" + foot_stadium + "</td></tr>";
				row4 = "<tr><td colspan=\"6\">"
				     + "<iframe width=\"696\" height=\"521\" src=\"" + foot_video + "\" frameborder=\"0\" allowfullscreen></iframe>"
					 + "</td></tr>";
				
				newWindow.document.write( row1 );
				newWindow.document.write( row2 );
				newWindow.document.write( row3 );
				newWindow.document.write( row4 );
			}
			if( data_football.length == 0 )
			{
				newWindow.document.write("<div>No data.</div>");
			}
			else
			{
				newWindow.document.write( "</table>" );
			}
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
