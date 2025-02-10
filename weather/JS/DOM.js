import { getUsers } from "./API.js";

const box = document.querySelector(".box");

export function get(user) {
  const tempElement = document.querySelector(".temp");
  const city = document.querySelector(".city");

  const temperature = Math.round(user.main.temp - 273.15);
  tempElement.innerHTML = `${temperature}°C`;
  city.innerHTML = user.name + ", " + user.sys.country;

  //! weather now images
  const weatherNow = user.weather[0].main.toLowerCase();
  if (weatherNow.includes("rain")) {
    box.style.backgroundImage =
      "url('../img/falling_rain_drops_on_white_umbrella_hd_rain-HD-1509524969.jpg')";
  } else if (weatherNow.includes("cloud")) {
    box.style.backgroundImage = "url('../img/cloudy.jpg')";
  } else if (weatherNow.includes("clear")) {
    box.style.backgroundImage = "url('../img/clear.jpg')";
  } else if (weatherNow.includes("mist")) {
    box.style.backgroundImage = "url('../img/mint.jpg')";
  }

  //data
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const byWeek = document.querySelector(".byWeek");
  const date = document.querySelector(".date");
  byWeek.textContent = dayOfWeek;
  date.textContent = formattedDate;

  //icon
  const mainWeather = user.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${mainWeather.icon}@2x.png`;
  const iconWeather = document.querySelector(".iconWeather");
  iconWeather.src = iconUrl;
  iconWeather.alt = "Weather Icon";

  //weather
  const period = document.querySelector(".period");
  period.textContent = mainWeather.main;

  //otherDate
  const wind = document.querySelector(".wind");
  const humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = user.main.humidity + "%";
  wind.innerHTML = `${user.wind.speed} km/h`;
}

//search
const searchForm = document.querySelector(".searchForm");
searchForm.onsubmit = (e) => {
  e.preventDefault();
  const value = searchForm["searchCity"].value.trim();
  getUsers(value);
};