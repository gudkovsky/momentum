import playList from '../playlist.js';
import { getRandomPositiveInteger } from './utilities.js';

const playBtn = document.querySelector('.play')
const currentTrack = document.querySelector('.current-track')


let isPlay = false;

const audio = new Audio();

let volumeNumber = 1;
audio.volume = volumeNumber

let audioCurrentTime = 0;
audio.currentTime = audioCurrentTime

// let randomTrackNum = getRandomPositiveInteger(0, (playList.length - 1))
let randomTrackNum = 0

function playAudio() {
  audio.src = playList[randomTrackNum].src;
  audio.currentTime = audioCurrentTime
  audio.volume
  if (!isPlay) {
    isPlay = true
    audio.play();
    playBtn.classList.toggle('play')
    playBtn.classList.toggle('pause')

  } else {
    audio.pause();
    isPlay = false;
    playBtn.classList.toggle('play')
    playBtn.classList.toggle('pause')
  }
    trackItem.forEach(el => {
    if (el.classList.contains('item-active')) {
      el.classList.remove('item-active')
    }
  })
trackItem[randomTrackNum].classList.add('item-active')
  currentTrack.textContent = '' + playList[randomTrackNum].title;
}

function selectAudio() {
  audio.src = playList[randomTrackNum].src;
  audio.currentTime = 0;
  audio.play();
  audio.volume
  isPlay = true
      playBtn.classList.remove('play')
    playBtn.classList.add('pause')
  // if (!isPlay) {
  //   // isPlay = true
  //   audio.play();
  //   // playBtn.classList.toggle('play')
  //   // playBtn.classList.toggle('pause')
  // } else {
  //   audio.pause();
  //   isPlay = false;
  //   playBtn.classList.toggle('play')
  //   playBtn.classList.toggle('pause')
  // }
  currentTrack.textContent = '' + playList[randomTrackNum].title;
}

let nextTrackBtn = document.querySelector('.play-next')
let prevTrackBtn = document.querySelector('.play-prev')

let selectNextTrack = function () {
  
  randomTrackNum++
  if (randomTrackNum > playList.length - 1) {
    randomTrackNum = 0
  }
  selectAudio()
  trackItem.forEach(el => {
    if (el.classList.contains('item-active')) {
      el.classList.remove('item-active')
    }
  })
trackItem[randomTrackNum].classList.add('item-active')
}

let selectPrevTrack = function () {
  randomTrackNum--
  if (randomTrackNum < 0) {
    randomTrackNum = playList.length - 1
  }
  selectAudio()
  trackItem.forEach(el => {
    if (el.classList.contains('item-active')) {
      el.classList.remove('item-active')
    }
  })
trackItem[randomTrackNum].classList.add('item-active')
}

nextTrackBtn.addEventListener('click', selectNextTrack)
prevTrackBtn.addEventListener('click', selectPrevTrack)



/* track list */

playBtn.addEventListener('click', playAudio);

const trackList = document.querySelector('.play-list')


const createTrackList = function () {
  for (let i = 0; i < playList.length; i++) {
    trackList.appendChild(document.createElement('li'))
    let li = document.querySelectorAll('.play-list li')


    li[i].textContent = '' + playList[i].title

  li.forEach(el => {
    el.classList.add('play-item')
  })
  }
}

createTrackList()

/* track select handler */

const trackItem = document.querySelectorAll('.play-list li')

trackItem.forEach((e, index) => {
    const playTrackOnClick = function() {
      
      audio.src = playList[index].src;
      audio.currentTime = 0;
      audio.volume
      randomTrackNum = index
      currentTrack.textContent = '' + playList[randomTrackNum].title;

        isPlay = true
        audio.play();
        playBtn.classList.remove('play')
        playBtn.classList.add('pause')
    }
    
  e.addEventListener('click', playTrackOnClick)
  })

// trackItem.forEach((e, index) => {
//   const playTrackOnClick = function() {
    
//     audio.src = playList[index].src;
//     audio.currentTime = 0;

//       isPlay = true
//       audio.play();
//       playBtn.classList.remove('play')
//       playBtn.classList.add('pause')
//       console.log(e)
//   }
  
// e.addEventListener('click', playTrackOnClick)

// })

// next track when audio ended

audio.addEventListener('ended', selectNextTrack)

// active track handler 

trackList.addEventListener('click', (e) => {
  trackItem.forEach(el => {
    if (el.classList.contains('item-active')) {
      el.classList.remove('item-active')
    }
  })

  let targetItem = e.target
  targetItem.classList.add('item-active')
  
})

// progress bar

const progress = document.querySelector('.progress')
const trackDuration = document.querySelector('.track-duration')
const currentTrackTime = document.querySelector('.current-time')

function updateProgress (e) {
const {duration, currentTime} = e.srcElement;
const progressPercent = (currentTime / duration) * 100;

// trackDuration.textContent = "" + (audio.duration / 60);
audioCurrentTime = audio.currentTime
progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)

// set progress 

const progressBar = document.querySelector('.progress-bar')

function setProgress(e) {
const width = this.clientWidth
const clickedPlaceX = e.offsetX
const audioDuration = audio.duration

audio.currentTime = (clickedPlaceX / width) * audioDuration

audioCurrentTime = audio.currentTime
}
progressBar.addEventListener('click', setProgress)

// set volume

const volumeBar = document.querySelector('.volume-slider')
const volumePercent = document.querySelector('.volume-percentage')

function setVolume(e) {
  
  const width = this.clientWidth
  const clickedPlaceX = e.offsetX
  
  // audio.volume = (clickedPlaceX / width)
  let setLoudness = '' + Math.round((Math.round(clickedPlaceX)) / (Math.round(width)) * 100)
  let loudness = '.'+ `${setLoudness}`.padStart(2, "0")

  audio.volume = loudness.padStart(2, "0")
  volumeButton.classList.remove('mute')
  volumePercent.style.width = `${setLoudness}%`

  console.log(loudness)
  }


  volumeBar.addEventListener('click', setVolume)
  
  const volumeButton = document.querySelector('.volume-button')
  const volumeContainer = document.querySelector('.volume-container')

  const muteAudio = () => {
    volumeButton.classList.toggle('mute')
    volumeContainer.classList.toggle('mute')
    audio.volume = 1;
    volumeNumber = 1;
    volumePercent.style.width = `100%`
    if (volumeButton.classList.contains('mute')) {
    volumePercent.style.width = `0%`
    audio.volume = 0;
    volumeNumber = 0;
    }
    
  }

  volumeButton.addEventListener("click", muteAudio)


//   function setUpdate(){
//     // let seekPosition = 0;
//     if(!isNaN(playList[randomTrackNum].duration)){
//         seekPosition = playList[randomTrackNum].currentTime * (100 / playList[randomTrackNum].duration);
//         seek_slider.value = seekPosition;

//         let currentMinutes = Math.floor(playList[randomTrackNum].currentTime / 60);
//         let currentSeconds = Math.floor(playList[randomTrackNum].currentTime - currentMinutes * 60);
//         let durationMinutes = Math.floor(playList[randomTrackNum].duration / 60);
//         let durationSeconds = Math.floor(playList[randomTrackNum].duration - durationMinutes * 60);

//         if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
//         if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
//         if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
//         if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

//         currentTrackTime.textContent = currentMinutes + ":" + currentSeconds;
//         trackDuration.textContent = durationMinutes + ":" + durationSeconds;
//         console.log('asd')
//     }
// }
// setInterval(setUpdate, 1000)

// PLAYER ACTIVE for style reasons

const audioPlayer = document.querySelector('.player')

audioPlayer.addEventListener('click', (e) => {
audioPlayer.classList.add('active')
})