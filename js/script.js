// SELECTORS

const addButton = document.querySelector('#addButton');
const body = document.querySelector('body');
const todoList = document.querySelector('#todoList');
const inputText = document.querySelector('input')

// ADD ITEM TO LIST
addButton.addEventListener('click', createListElement);

// CREATE LIST ITEM

function createListElement() {
	  		const inputTextValue = inputText.value;
        const listItem = document.createElement('li');
        todoList.appendChild(listItem);
        listItem.innerText = inputTextValue;
        createButton(listItem);
        inputText.value = '';
}

// CREATE DELETE AND CHECK BUTTONS
function createButton(e) {
    const deleteButton = document.createElement('button');
    const checkButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    checkButton.innerText = 'Completed';
    e.appendChild(deleteButton);
    e.appendChild(checkButton);
    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    checkButton.addEventListener('click', (e) => {
        e.target.parentElement.classList.add('marked');
    })
}