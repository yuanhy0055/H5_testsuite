
function addressTocoordinate(){
	// Get the position
	function getPositionCB(results) {
		console.log("latitude: " + results[0].coordinates.latitude + ", longitude:" + results[0].coordinates.longitude);
	}
	function onError(e){
		console.log("address To coordinate failed");
	}

	// Prepare the request
	var address = '2111 NE 25th St, Hillsboro, OR, 97124';
	  
	tizen.lbs.geocoder.getDefaultProvider().geocode(address, getPositionCB, onError);
}

function coordinateToaddress(){
	//Get the address information
	function getAddressCB(results) {
		if (results.length > 0)
			console.log("The city name is: " + results[0].city);
	}
	function onError(e){
		console.log("coordinate To address failed");
	}
	// Prepare the request
	var coordinates = new tizen.SimpleCoordinates(37.5665, 126.9779); // Seoul, South Korea
	var options = {resultType: 'STRUCTURED'};

	tizen.lbs.geocoder.getDefaultProvider().reverseGeocode(coordinates, getAddressCB, onError, options);
}



function geocoderApiTest()
{
	console.log("======geocoderApiTest======");
	addressTocoordinate();
	coordinateToaddress();
	
}