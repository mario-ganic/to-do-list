const addButton = document.querySelector('#addButton');
const body = document.querySelector('body');
const todoList = document.querySelector('#todoList');


addButton.addEventListener('click', () => {
const listItem = document.createElement('li');	
todoList.appendChild(listItem);
listItem.innerText = 'List Stuff';
});