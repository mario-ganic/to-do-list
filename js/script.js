// SELECTORS

const addButton = document.querySelector('#addButton');
const body = document.querySelector('body');
const todoList = document.querySelector('#todoList');
const inputText = document.querySelector('input')

// ADD ITEM TO LIST
addButton.addEventListener('click', () => {
    const inputTextValue = inputText.value;
    const listItem = document.createElement('li');
    todoList.appendChild(listItem);
    listItem.innerText = inputTextValue;
    createButton(listItem);
    inputText.value = '';
});


// DELETE ITEM

function createButton(e) {
	 const deleteButton = document.createElement('button');
   deleteButton.innerText = 'Button';	
	 e.appendChild(deleteButton);
	 deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
}

