const greeting = document.querySelector('.greeting')

export const date = new Date();

export const hours = date.getHours();

let greetingText;

let setGreeting = function () {
  if (hours >= 22 || hours <= 4) { // не работает 
    greetingText = 'Доброй ночи,'
  }
  if (hours >= 5 && hours <= 11) {
    greetingText = 'Доброе утро,'
  }
  if (hours >= 12 && hours <= 16) {
    greetingText = 'Добрый день,'
  }
  if (hours >= 17 && hours <= 21) {
    greetingText = 'Добрый вечер,'
  }

  greeting.textContent = greetingText;
  setTimeout(setGreeting, 6000)
}
setGreeting()

export const username = document.querySelector('.name')



function setLocalStorage() {
  localStorage.setItem('name', username.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    username.value = localStorage.getItem('name')
  }
}
window.addEventListener('load', getLocalStorage)



// function increaseWidth() {
//   var numberOfCharacters = username.value.length;
//     if (numberOfCharacters >= 1) {
//       var extraLength = numberOfCharacters + 'ch' 
//       username.style.width = extraLength;
//       console.log(numberOfCharacters)
//     } else { 
//       username.style.width = '1ch';
//     }
// }

function increaseWidth() {
  var numberOfCharacters = username.value.length;
    if (numberOfCharacters >= 1) {
      var extraLength = numberOfCharacters * 24 + 'px' 
      username.style.width = extraLength;
    } 
    else {
      username.style.width = 270 + 'px';
    }
}


username.addEventListener('input', increaseWidth)
window.onload = () => {
  increaseWidth()
}