function showText(text){
	alert(text);
}

function validate(){
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	if ( login == "google" && password == 12345){
	document.getElementById('form_id').style.display = 'none';
	//alert("Login successfully");
	document.getElementById('content').innerHTML = `
	welcome back
	<button onclick="showText('hello1')">Click1</button>
	<button onclick="showText('hello2')">Click2</button>
	`;

	document.getElementById('out').innerHTML = `
	<button onclick="showUsaCities('hello1')">Click1</button>
	<button onclick="showUsaCities('hello2')">Click2</button>
	`;
	}else{
	alert('Incorrect login or password');
	}
}


// homework
function showUsaCities(){
	document.getElementById('cities').innerHTML = `
	<button id="washingtonCity">Washington DC</button>
	<button id="newYorkCity">New York</button>
	<button>Los Angeles</button>
	<button>Miami</button>
	<button>Chicago</button>
	`;

	const data = [
		{
			id: 'canada'
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
		}
	]
	

	document.getElementById('washingtonCity').onclick = function(){
		const usa = data.find(function(elem){
			return elem.id == 'usa'
		})
		const washington = usa.cities.find(function(elem){
			return elem.id == 'washington'
		})
		console.log(washington.addresses)

		let c = washington.addresses.map(function(elem){
			return `<p>${elem}</p>`
		}).join('')
		console.log(c)
		document.getElementById('streets').innerHTML = c;
	}

	document.getElementById('newYorkCity').onclick = function(){
		const usa = data.find(function(elem){
			return elem.id == 'usa'
		})
		const newYork = usa.cities.find(function(elem){
			return elem.id == 'newYork'
		})
		console.log(newYork.addresses)

		let c = newYork.addresses.map(function(elem){
			return `<p>${elem}</p>`
		}).join('')
		console.log(c)
		document.getElementById('streets').innerHTML = c;
	}

}


function showCanadaCities(){
	document.getElementById('cities').innerHTML = `
	<button>Toronto</button>
	<button>Vancouver</button>
	<button>Edmonton</button>
	<button>Vinnipeg</button>
	<button>Kvebec</button>
	`;
}