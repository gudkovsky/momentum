const time = document.querySelector('.time')
const day = document.querySelector('.date')

const showTimeDate = function  () {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  const options = {month: 'long', day: 'numeric', weekday: 'long'};
  const currentDate = date.toLocaleDateString('ru-RU', options);;



  time.textContent = '' + currentTime
  day.textContent = '' + currentDate


   setTimeout(showTimeDate, 1000);
}
showTimeDate()
// setInterval(showTime, 200)