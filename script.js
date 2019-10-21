// var ddd = document.getElementById('ddd').addEventListener('click', loadREST);
var details = document.getElementById('details');
var countryInputted = document.getElementById('country');

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
			
			
			data.forEach(function(dat){
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
				</div>

			`;
			});
			details.innerHTML = html;
		})
		
		.catch(function(error)
		{
			details.innerHTML = error;
		})
	}
}
