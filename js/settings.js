const settingsButton = document.querySelector('.settings__button')
const settingsContainer = document.querySelector('.settings__container')

settingsButton.addEventListener('click', () => {
  settingsContainer.classList.toggle('active')
})


const playerCheck = document.querySelector('#settings-player');
const todoCheck = document.querySelector('#settings-todo');
const weatherCheck = document.querySelector('#settings-weather');
const greetingsCheck = document.querySelector('#settings-greeting');
const searchCheck = document.querySelector('#settings-search');
const quotesCheck = document.querySelector('#settings-quotes');

let optionsChecked = JSON.parse(localStorage.getItem('optionsChecked')) || [true, true, true, true, true, true]

playerCheck.checked = optionsChecked[0]
todoCheck.checked = optionsChecked[1]
weatherCheck.checked = optionsChecked[2]
greetingsCheck.checked = optionsChecked[3]
searchCheck.checked = optionsChecked[4]
quotesCheck.checked = optionsChecked[5]


function toggleElement(element) {
    document.querySelector(`.${element}`).classList.toggle('hide')
}

    if (!playerCheck.checked){
        toggleElement('player');

     }
    if (!todoCheck.checked) {
        toggleElement('todo-container');
     }
    if (!weatherCheck.checked) {
      toggleElement('weather');
   }
    if (!greetingsCheck.checked) {
      toggleElement('greeting-container');
    }
    if (!searchCheck.checked) {
      toggleElement('search-container');
    }
    if (!quotesCheck.checked) {
      toggleElement('quote__section');
    }


playerCheck.addEventListener('click', () => {
    optionsChecked[0] = playerCheck.checked
    localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
    toggleElement('player');
});

todoCheck.addEventListener('click', () => {
  optionsChecked[1] = todoCheck.checked
  localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
  toggleElement('todo-container');
});

weatherCheck.addEventListener('click', () => {
  optionsChecked[2] = weatherCheck.checked
  localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
  toggleElement('weather');
});

greetingsCheck.addEventListener('click', () => {
  optionsChecked[3] = greetingsCheck.checked
  localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
  toggleElement('greeting-container');
});

searchCheck.addEventListener('click', () => {
  optionsChecked[4] = searchCheck.checked
  localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
  toggleElement('search-container');
});

quotesCheck.addEventListener('click', () => {
  optionsChecked[5] = quotesCheck.checked
  localStorage.setItem('optionsChecked', JSON.stringify(optionsChecked));
  toggleElement('quote__section');
  toggleElement('change-quote');
});