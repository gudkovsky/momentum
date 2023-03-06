import { getRandomPositiveInteger } from "./utilities.js";
import { date, hours } from "./greeting.js";

let picturesFolder;

let setBgFolder = function () {
  if (hours >= 22 || hours <= 4) {
    picturesFolder = 'night'
  }
  if (hours >= 5 && hours <= 11) {
    picturesFolder = 'morning'
  }
  if (hours >= 12 && hours <= 16) {
    picturesFolder = 'afternoon'
  }
  if (hours >= 17 && hours <= 21) {
    picturesFolder = 'evening'
  }
  setTimeout(setBgFolder, 60000)
  return picturesFolder
  
}
setBgFolder()

const body = document.body
let randomNum = getRandomPositiveInteger(1, 20)

let randomPhoto = "" + randomNum


/* get slides on click */
const setNextBgImage = function () {
  randomNum++
  if (randomPhoto === "20") {
    randomNum = 1
  }

    randomPhoto = "" + randomNum
    setBg()
}

const setPrevBgImage = function () {
  randomNum--
  if (randomPhoto === "1") {
    randomNum = 20
  }

  randomPhoto = "" + randomNum
  setBg()
}

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

slideNext.addEventListener('click', setNextBgImage)
slidePrev.addEventListener('click', setPrevBgImage)

// const setBg = function () {
  
//   body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${picturesFolder}/${randomPhoto.padStart(2, "0")}.jpg')`;
// }
// setBg()

const setBg = function () {
  const img = new Image();
  
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${picturesFolder}/${randomPhoto.padStart(2, "0")}.jpg`;
  
  img.onload = () => {  
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${picturesFolder}/${randomPhoto.padStart(2, "0")}.jpg')`
  }
  
}
setBg()