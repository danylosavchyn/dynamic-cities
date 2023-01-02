// homework
const data = [
	{
		id: 'canada',
		cities: [
			{
				id: 'ottawa',
				addresses: ['Mapple Syrop St.', '18th Street NW.']
			},
			{
				id: 'toronto',
				addresses: ['Michael Rat St.']
			},
			{
				id: 'montreal',
				addresses: ['napoleon St.', 'vesela st.']
			}
		]
	},
	{
		id: 'usa',
		cities: [
			{
				id: 'washington',
				addresses: ['Pennsylvania Avenue.', '18th Street NW.', 'U St.', 'Beach Drive.', 'Connecticut Avenue NW.', 'Swann Street NW.']
			},
			{
				id: 'newYork',
				addresses: ['Broadway', 'Park Avenue.', 'Marks Place St.', '5 Avenue.', 'Washington St.', 'Wall St.']
			}
		]
	},
	{
		id:'mexico',
		cities: [
			{
				id: 'mexico city',
				addresses: ['Madero St.', 'Amsterdam Avenue', 'Genova St.']
			}
		]
	}
]

const getStreets = function(countryId, cityId){
	const country = data.find(function(elem){
		return elem.id == countryId
	})
	const city = country.cities.find(function(elem){
		return elem.id == cityId
	})
	console.log(city.addresses)

	let c = city.addresses.map(function(elem){
		return `<p>${elem}</p>`
	}).join('')
	console.log(c)
	return c;
}

const getCities = function(countryId){
	const country = data.find(function(elem){
		return elem.id == countryId
	})

	let c = country.cities.map(function(elem){
		return `
			<button
				onclick="document.getElementById('streets').innerHTML = getStreets('${countryId}', '${elem.id}');"
			>
				${elem.id}
			</button>
		`
	}).join('');
	console.log(c);
	return c;
}

const getCountries = function(){
	const countryNames = data.map(function(elem){
		return `
		<button
			onclick="showCountryCities('${elem.id}')"
		>
			${elem.id}
		</button>`;
	}).join('');
	console.log(countryNames)
	return countryNames;
}

const generateCountries = function(){
		//<button onclick="showCountryCities('usa')">USA</button>
		//<button onclick="showCountryCities('canada')">Canada</button>
		//<button onclick="showCountryCities('mexico')">Mexico</button>
		// 1. згенерувати кнопки для країн(як зверху)
		// 2. заіннерхтмлити в countries
		//debugger;
	document.getElementById('countries').innerHTML = getCountries();
	// showCountryCities('usa'); // default show usa cities
	// document.getElementById('streets').innerHTML = getStreets('usa', 'newYork'); // default show new york streets
	
	// random default country
	let defaultCountry = 'usa'; // this should be random: usa, canada or mexico
	showCountryCities('usa');
	// document.getElementById('streets').innerHTML = getStreets(defaultCountry, 'newYork');
}

const showCountryCities = function(countryId){
	document.getElementById('cities').innerHTML = getCities(countryId);
};

const showCityStreets = function(cityId){
	document.getElementById('cities').innerHTML = getCities(cityId);
};

generateCountries()

/*
function arriveRandom() {
    var arv  = ["Houston" , "Atlanta" , "Honolulu" , "Paris"];
    var dept = ["Atlanta" , "Salt Lake City" , "Kennedy Intl" , "Los Angeles" , "San Fransisco"];
    var randArv = arv[Math.round(Math.random()*(arv.length-1))];
    var randDept = dept[Math.round(Math.random()*(dept.length-1))];

    // now randArv and randDept have random arrivals and departures
	document.getElementById('arrival').innerHTML = randArv;
}
arriveRandom()
*/

function arriveRandom(countryId){
	let usa = data.filter(function(elem){
		return elem.id == countryId
	})
}
/*
function showCitiesByDefault(countryId, cityId){
	const country = data.find(function(elem){
		return elem.id == countryId
	})
	
}
showCitiesByDefault()
*/


/*
let c = data.find(function(elem){
	return elem.id == 'usa'
})
document.getElementById('cities').innerHTML = c;
*/










