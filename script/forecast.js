const apikey = "3c3fb1a2f948716e1bfec3e4fa1330ce";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search-bar");
const searchbtn = document.querySelector("button");
const icon = document.querySelector(".icon");

searchbtn.addEventListener("click", () => {
  getweather(searchbox.value);
});

const getweather = async (city) => {
  const response = await fetch(url + city + `&appid=${apikey}`);
  var data = await response.json();

  // ! dom manipulation for insertion of data

  document.querySelector(".city").innerHTML = data.name;

  const temp = document.querySelector(".temp");
  temp.innerHTML = data.main.temp + " " + "°C";

  const humiditypercent = document.querySelector(".humiditypercent");
  humiditypercent.innerHTML = data.main.humidity + " " + "%";

  const windspeed = document.querySelector(".windspeed");
  windspeed.innerHTML = data.wind.speed + " " + "km/h";

  const condition = document.querySelector(".condition");
  condition.innerHTML = data.weather[0].main;

  if (data.weather[0].main == "clouds") {
    icon.src = "image/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "image/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "image/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "image/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "image/images/mist.png";
  } else {
    icon.src = "image/images/mist.png";
  }
};

// getweather();
