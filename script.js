// Get Inputted Country

var details = document.getElementById('details');
var countryInputted = document.getElementById('country');
var errorLoad = document.getElementById('errorLoad');

function getCountry()
{
	if(countryInputted.value === '')
	{
		alert("No Country To Search");
	}
	else
	{
		var checkCountry = countryInputted.value;
		fetch('https://restcountries.eu/rest/v2/name/'+checkCountry)
		.then(function(response)
		{
			console.log(response);
			
			return response.json();
		})
		.then(function(data){
			console.log(data);
			
			let html = '';
			
			
			data.forEach(function(dat)
			{
				html += `
				
				<div class='container'>
					<table class='table table-dark table-hover'>
						<thead>
							<tr>
								<th>Country</th>
								<th>Region</th>
								<th>Populations</th>
								<th>Timezone</th>
								<th>Currrency</th>
								<th>Languages</th>
								<th>Calling Codes</th>
							</tr>
						</thead>
					
						<tbody>
							<tr>
								<td>${dat.name}</td>
								<td>${dat.region}</td>
								<td>${dat.population}</td>
								<td>${dat.timezones}</td>
								<td>${dat.currencies}</td>
								<td>${dat.languages}</td>
								<td>${dat.callingCodes}</td>
							</tr>
						</tbody>
					</table>
				</div>

			`;
			});
			details.innerHTML = html;
		})
		
		.catch(function(error)
		{
			errorLoad.innerHTML = error;
		})
	}
}




// Get All Countries

var gottenCountries = document.getElementById('countriesGotten');


getAllToBeClicked = () =>
{
	fetch('https://restcountries.eu/rest/v2/all')
	.then(function(response)
	{
		console.log(response);
			
		return response.json();
	})
	.then(function(data)
	{
		console.log(data);
		
		let html = '';
		
		data.forEach(function(dat)
		{
			html += `
				<table class='table table-dark table-hover'>
					<tbody>
						<tr>
							<td>${dat.name}</td>
						</tr>
					</tbody>
				</table>
			`;
		});
		
		gottenCountries.innerHTML = html;
	})
	.catch(function(error)
	{
		errorLoad.innerHTML = error;
	})
}
