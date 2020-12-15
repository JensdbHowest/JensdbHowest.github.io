const PUBLIC_KEY = 'd43ff96121df0d5935afa22e9c8f51bb';
const PUBLIC_MIXKEY = '';
const PRIV_KEY = '45d66de33de2eb1f17caf74bb1658c215d734dfb';
	
// 3 Met de data van de API kunnen we de app opvullen
let showResult = queryResponse => {
	console.log('ShowResult');
	
};

let getData = async (apiUrl) => {

	console.log('in getData')

	apiUrl = ""

	var ts = new Date().getTime();
	var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
	



	// opbouwen van de url
	let ENDPOINT = `https://gateway.marvel.com/v1/public/characters`;
	ENDPOINT = ENDPOINT + `?apikey=` + PUBLIC_KEY + `&ts=` + ts + `&hash=` + hash;
	console.log('hoi')

	// Met de fetch API proberen we de data op te halen.
	const request = await fetch(`${ENDPOINT}`);
	const data = await request.json();
	console.log(data);

	showResult(data);
};

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	console.log('Dom Loaded');
	getData('hoi');
});
