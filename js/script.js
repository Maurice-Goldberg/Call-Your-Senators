var KEY = "AIzaSyDPNbrJq-gS1fwp345TWIL2CDyqTxADT1g";

function toTitleCase(str)
{
	console.log("totitlecasecheck");
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function returnTables(response) {
	var responseObj = response;
	var officialsArr = {};
	var officesArr = {};
	officialsArr = (responseObj.officials).slice(2);
	officesArr = (responseObj.offices).slice(2);
	
	//declaring necessary variables
	var i;
	var j = 0;
	var positionStr;
	var x;
	var w = $('#results2 tbody');
	var addressStr;
	var officialsAddress;
	var line1;
	var line2;
	var city;
	var state;
	var zip;
	var tr1;
 
  //make officials table
		for(x = 0; x < officialsArr.length; x++) {
			tr1 = $("<tr role=\"row\" class=\"odd\"></tr>").appendTo(w);
			
			//name of official
			tr1.append( "<td class=\"sorting_1\">" + officialsArr[x].name + "</td>" );
			
			//photoUrl of official
			if(typeof(officialsArr[x].photoUrl) !== 'undefined') {
				tr1.append( "<td class=\"sorting_1\"><img src=\"" + officialsArr[x].photoUrl + "\"/></td>");
			}
			else {
				tr1.append('<td>' + "N/A" + '</td>');
			}
			
			//put position in table
			if(typeof(officesArr[x]) !== 'undefined') {
				positionStr = officesArr[x].name;
				tr1.append('<td>' + positionStr + '</td>');
			}
			else {
				tr1.append('<td>' + "N/A" + '</td>');
			}
			
			//party of official
			if(typeof(officialsArr[x].party) !== 'undefined') {
				tr1.append( "<td class=\"sorting_1\">" + (officialsArr[x].party).charAt(0).toUpperCase() + (officialsArr[x].party).slice(1) + "</td>");
			}
			else {
				tr1.append('<td>' + "N/A" + '</td>');
			}
			
			//address of official
			if(officialsArr[x].address) {
				addressStr = "";
				officialsAddress = officialsArr[x].address;
				line1 = officialsArr[x].address[0].line1;
				line2 = officialsArr[x].address[0].line2;
				city = officialsArr[x].address[0].city;
				state = officialsArr[x].address[0].state;
				zip = officialsArr[x].address[0].zip;

				if(typeof(officialsAddress) !== 'undefined') {		
					if(officialsArr[x].address[0].hasOwnProperty('line1')) {
						addressStr += toTitleCase(line1) + ", ";
					}
					if(officialsArr[x].address[0].hasOwnProperty('line2')) {
						addressStr += toTitleCase(line2) + ", ";
					}
					if(officialsArr[x].address[0].hasOwnProperty('city')) {
						addressStr += toTitleCase(city) + ", ";
					}
					if(officialsArr[x].address[0].hasOwnProperty('state')) {
						addressStr += (state).toUpperCase() + ", ";
					}
					if(officialsArr[x].address[0].hasOwnProperty('zip')) {
						addressStr += toTitleCase(zip);
					}
					tr1.append("<td class=\"sorting_1\">" + addressStr + "</td>");
					addressStr = "";
				}
			}
			
			
			else {
				tr1.append('<td>' + "N/A" + '</td>');
			}
			
			//phone of official
			if(typeof(officialsArr[x].phones) !== 'undefined') {
				tr1.append( "<td class=\"sorting_1\">" + (officialsArr[x].phones[0]) + "</td>");
			}
			else {
				tr1.append('<td>' + "N/A" + '</td>');
			}
	}
	document.getElementById("fillerRow2").remove();
  }

function getData(locationInput) {
	$.ajax({
		url: "https://www.googleapis.com/civicinfo/v2/representatives",
		data: {
			address: locationInput,
			includeOffices: true,
			key: KEY
		},
		success: function(response) {
			returnTables(response);
		},
		error: function(response) {
			console.log("Something went wrong with your API call... Above is the response from the server.\n");
		}
	});
}

$(document).ready( function() {
	$('#results2').DataTable({bFilter: false, bLengthChange: false, bPaginate: false, bInfo: false, ordering: false});
	$("#search-form1, #search-form2, h1, h2, #results2, #results2_wrapper, #back-button").hide();
	$("#search-form1, h1, h2").fadeIn("slow");
	
	//when user main submit button...
	 document.getElementById('search-form1').addEventListener('submit', function (e) {
    	e.preventDefault();
		
		//get value from location text input
	    var locationInput = document.getElementById("location1").value;
		
		//log user input
		console.log("location input: " + locationInput);
		
		//check that user has input a location
    	if (locationInput.length < 1) {
        	alert("Please enter a location.");
        	return false;
    	}

		//make API call
		getData(locationInput);
		
		//fade out main search form
		$('#search-form1, h2').fadeOut('slow');
		$('#search-form1, h2').hide();
	
		//fade in officials table and back-button
		$('#results2_wrapper, #results2, #back-button').fadeIn('slow');
	});
	
	$('#back-button').click(function() {
		location.reload();
	});
});