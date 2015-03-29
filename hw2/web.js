document.getElementById("xmlform").onsubmit = function()
{
	var url = document.getElementById("xmlurl").value;
	// check the url is empty
	if( url == "" || url == null )
	{
		alert("Error. Please input XML url.");
		return false;
	}
	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	
	xmlDoc = xmlhttp.responseXML;

	var newWindow = window.open("", "", "width=800, height=600");

	// prever the page data lose
	return false;
}

document.getElementById("xslurl").onclick = function()
{

	var newWindow = window.open("", "", "width=800, height=600");

	// prevent to next page
	return false;
}
