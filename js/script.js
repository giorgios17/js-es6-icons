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
console.log('Animali', animals);

//filtro solo vegetali
const vegetables = allIcons.filter((element, index, array) => element.type === 'vegetable');
console.log('Vegetali', vegetables);

//filtro solo utenti
const users = allIcons.filter((element, index, array) => element.type === 'user');
console.log('Utenti', users);

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
