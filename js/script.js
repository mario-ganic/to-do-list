// SELECTORS

const addButton = document.querySelector('#addButton');
const body = document.querySelector('body');
const todoList = document.querySelector('#todoList');
const inputText = document.querySelector('input');


// CREATE TO DO

function createListElement() {
	if(inputText.value.length > 0){
        const listItem = document.createElement('li');
        todoList.appendChild(listItem);
        listItem.innerText = inputText.value;
        createButton(listItem);
        checkButton(listItem);
        inputText.value = '';
}
}

// CREATE DELETE AND CHECK BUTTONS
function createButton(element) {
		const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    element.appendChild(deleteButton);
    deleteButton.addEventListener('click', (element) => {
        element.target.parentElement.remove();
    })
}

function checkButton(e) {
	const checkButton = document.createElement('button');
	checkButton.innerText = 'Completed';
  e.appendChild(checkButton);
   checkButton.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('marked');
    })
}


// ADD LIST WITH ENTER

function addListWithEnter(event) {
    if (inputText.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// ADD ITEM TO LIST USING CLICK AND ENTER
addButton.addEventListener('click', createListElement);

inputText.addEventListener('keypress', addListWithEnter);