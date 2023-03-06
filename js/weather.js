const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city')

city.value = 'Минск'
let cityName = city.value

async function getWeather() {
  try {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=f552f096d07c2c3a6b489777eafdb01a&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  wind.textContent = `Ветер: ${Math.round(data.wind.speed)}м/с`;
  humidity.textContent =`Влажность: ${data.main.humidity}%`;
  weatherDescription.textContent = data.weather[0].description;
  weatherDescription.style.color = 'inherit'
  weatherDescription.style.fontSize = '100%'

} catch (err) {
  temperature.textContent = '';
  wind.textContent = '';
  humidity.textContent = '';
  weatherDescription.textContent = 'Укажите правильное название города';
  weatherDescription.style.color = 'red'
  weatherDescription.style.fontSize = '90%'
}

}
getWeather()

city.onchange = () => {
  cityName = city.value
  getWeather()
}

function setLocalStorage() {
  localStorage.setItem('city', city.value);
  localStorage.setItem('weather', getWeather)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
  }
  if (localStorage.getItem('weather')) {
    getWeather()
  }
}
window.addEventListener('load', getLocalStorage)