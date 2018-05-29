let request = new XMLHttpRequest();
let url =
	'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.';
let word = 'json';
let requestURL = `${url}${word}`;
//console.log(requestURL);
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
	var superHeroesText = request.response; // get the string from the response
	var superHeroes = JSON.parse(superHeroesText); // convert it to an object
	console.log(superHeroes);
	console.log(superHeroes.squadName);
};


//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
