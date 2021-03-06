const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.element-container');

//creo div icon-container dentro element-container con l'elemento html
function createIconContainer(obj) {
	const element = document.createElement('div');
	element.className = 'icon-container'
	container.appendChild(element);
	element.innerHTML = `<i class="${obj.family} ${obj.prefix}${obj.name} ${obj.color} fa-2x"></i>
	<p class="text-uppercase fw-bold">${obj.name}</p>`
}

// ciclo per creare tutti gli elementi dell'array
allIcons.forEach((element, index, array) => {
	createIconContainer(element)
});

//filtro solo animali
const animals = allIcons.filter((element, index, array) => element.type === 'animal');

//filtro solo vegetali
const vegetables = allIcons.filter((element, index, array) => element.type === 'vegetable');

//filtro solo utenti
const users = allIcons.filter((element, index, array) => element.type === 'user');

//funzione mostra solo selezionati
function showOnlySelected() {
	let selected = document.getElementById('type').value;
	container.innerHTML = '';
	if (selected === 'animal') {
		animals.forEach((element, index, array) => {
			createIconContainer(element)
		});
	}
	else if (selected === 'vegetable') {
		vegetables.forEach((element, index, array) => {
			createIconContainer(element)
		});
	}
	else if (selected === 'user') {
		users.forEach((element, index, array) => {
			createIconContainer(element)
		});
	}
	else {
		allIcons.forEach((element, index, array) => {
			createIconContainer(element)
		});
	}
};

//BONUS
//1- modificare la struttura dati fornita e valorizzare la propriet?? "color" in modo dinamico: 
//generare in modo casuale un codice colore, sapendo che la notazione esadecimale ?? formata 
//dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
const alfaNumerici = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function numeroRandomRange(min, max) {
	const range = (max - min) + 1;
	const numeroRandom = Math.floor(Math.random() * range + min);
	return numeroRandom;
}

const colorRandom = [];
/*
for (let i = 0; i < 6; i++) {
	let toPush = alfaNumerici[numeroRandomRange(0, 15)];
	colorRandom.push(toPush)
}

console.log(colorRandom);
for (let i = 0; i < animals.length; i++) {
	animals[i].color = '#' + colorRandom.join('');
}

console.log(animals)
*/
//2- popolare le options della select della milestone 3 dinamicamente.

