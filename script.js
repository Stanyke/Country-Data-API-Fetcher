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
			
			let html = `<div class='container'>
							<div class="table-responsive">
								<table class='table table-dark table-hover'>
									<thead>
										<tr>
											<th>Country</th>
											<th>Capital</th>
											<th>Region</th>
											<th>Populations</th>
											<th>Timezone</th>
											<th>Currrency Code</th>
											<th>Currrency Name</th>
											<th>Currrency Symbol</th>
											<th>Languages</th>
											<th>Calling Codes</th>
										</tr>
									</thead>
								
									<tbody>`;
			
			
			data.forEach(function(dat)
			{
				html += `<tr>
							<td>${dat.name}</td>
							<td>${dat.capital}</td>
							<td>${dat.region}</td>
							<td>${dat.population}</td>
							<td>${dat.timezones}</td>
							<td>${dat.currencies[0].code}</td>
							<td>${dat.currencies[0].name}</td>
							<td>${dat.currencies[0].symbol}</td>
							<td>${dat.languages[0].name}</td>
							<td>${dat.callingCodes}</td>
						</tr>`;
			});

			html += `</tbody>
				</table>
			</div>
		</div>`

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
		
		let html = `<div class='container'>
						<div class="table-responsive">
							<table class='table table-dark table-hover'>
								<tbody>`;
		
		data.forEach(function(dat)
		{
			html += `<tr>
						<td>${dat.name}</td>
					</tr>`;
		});

		html += `</tbody>
			</table>
		</div>
	</div>`
		
		gottenCountries.innerHTML = html;
	})
	.catch(function(error)
	{
		errorLoad.innerHTML = error;
	})
}
