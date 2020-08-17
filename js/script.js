const addButton = document.querySelector('#addButton');
const body = document.querySelector('body');
const todoList = document.querySelector('#todoList');
const inputText = document.querySelector('input')

addButton.addEventListener('click', () => {
const inputTextValue = inputText.value;	
const listItem = document.createElement('li');	
todoList.appendChild(listItem);
listItem.innerText = inputTextValue;
inputText.value = '';
});