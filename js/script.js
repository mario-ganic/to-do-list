// SELECTORS

const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');
const inputText = document.querySelector('input');


// CREATE TO DO

function createListElement() {
    if (inputText.value.length > 0) {
        const listItem = document.createElement('li');
        const todoDiv = document.createElement('div');
        todoList.appendChild(todoDiv);
        todoDiv.appendChild(listItem);
        todoDiv.classList.add('todoDiv');
        listItem.innerText = inputText.value;
        checkButton(todoDiv);
        deleteButton(todoDiv);

        inputText.value = '';
    }
}

// CREATE DELETE AND CHECK BUTTONS
function checkButton(e) {
    const checkButton = document.createElement('button');
    checkButton.innerText = 'Finished';
    checkButton.classList.add('checkBtn');
    e.appendChild(checkButton);
    checkButton.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('marked');
    })
}

function deleteButton(e) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delBtn');
    e.appendChild(deleteButton);
    deleteButton.addEventListener('click', (element) => {
        element.target.parentElement.remove();
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


//DATE AND TIME//


const today = document.querySelector('#date');
const date = new Date();
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}




today.innerText = day + '  ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();