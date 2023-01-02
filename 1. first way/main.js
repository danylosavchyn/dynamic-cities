function showText(text){
	alert(text);
}

function validate(){
	let login = document.getElementById("login").value;
	let password = document.getElementById("password").value;
	if ( login == "google" && password == 12345){
		document.getElementById('form_id').style.display = 'none';

		document.getElementById('content').innerHTML = `
		welcome back
		<button onclick="showText('hello1')">Click1</button>
		<button onclick="showText('hello2')">Click2</button>
		`;
	}else{
	alert('Incorrect login or password');
	}
}


function showUsaCities(){
	document.getElementById('cities').innerHTML = `
	<button id="washingtonCity">Washington DC</button>
	<button id="newYorkCity">New York</button>
	<button>Los Angeles</button>
	<button>Miami</button>
	<button>Chicago</button>
	`;

	document.getElementById('washingtonCity').onclick = function(){
		document.getElementById('streets').innerHTML = `
		<p>Pensylvalia Avenue</p>
		<p>18th Street NW.</p> 
		<p>U St.</p>
		<p>Beach Drive.</p>
		<p>Connecticut Avenue NW.</p>
		<p>Swann Street NW.</p>
		`;
	}

	document.getElementById('newYorkCity').onclick = function(){
		document.getElementById('streets').innerHTML = `
		<p>Broadway</p>
		<p>Park Avenue.</p>
		<p>Marks Place St.</p>
		<p>5 Avenue.</p>
		<p>Washington St.</p>
		<p>Wall St.</p>
		`;
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