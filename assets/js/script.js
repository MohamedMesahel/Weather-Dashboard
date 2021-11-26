// Declare Globale Variables
var cities = [];
var clearEl = document.getElementById("clear-history");
var historyEl = document.getElementById("history");
var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");

// Declare Input Function
var formSumbitHandler = function(event){
    event.preventDefault();
    
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } 

    saveSearch();
    pastSearch(city);
}

// Declare Save Search City Function
var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};

// Declaring and Establishing the Call Function to Openweather  
var getCityWeather = function(city){
    
    var apiKey = "8a53c204fdc7aafec86bf779403642e0"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};

// Desplaying results and clearing previous data
var displayWeather = function(weather, searchCity){
   weatherContainerEl.textContent= "";  
   citySearchInputEl.textContent=searchCity;

   //Declare Date Element
   var currentDate = document.createElement("span")
   currentDate.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
   citySearchInputEl.appendChild(currentDate);

   //Declare Image Element
   var weatherIcon = document.createElement("img")
   weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
   citySearchInputEl.appendChild(weatherIcon);

   //Declare & Create Card Element to Hold Temperature Data
   var temperatureEl = document.createElement("span");
   temperatureEl.textContent = "Temperature: " + weather.main.temp + " °F";
   temperatureEl.classList = "list-group-item"
  
   //Declare & Create Card Element to Hold Humidity Data
   var humidityEl = document.createElement("span");
   humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
   humidityEl.classList = "list-group-item"

   //Declare & Create Card Element to Hold Wind Data
   var windSpeedEl = document.createElement("span");
   windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
   windSpeedEl.classList = "list-group-item"

   //Appending Elements to the Main Container
   weatherContainerEl.appendChild(temperatureEl);
   weatherContainerEl.appendChild(humidityEl);
   weatherContainerEl.appendChild(windSpeedEl);
   var lat = weather.coord.lat;
   var lon = weather.coord.lon;
   getUvIndex(lat,lon)
}

//Declare & Create Function to Retrive UV Data
var getUvIndex = function(lat,lon){
    var apiKey = "8a53c204fdc7aafec86bf779403642e0"
    var apiURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`
    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayUvIndex(data)
        });
    });
    
}
//  Displaying UV Results with Changing Background Based on Value
var displayUvIndex = function(index){
    var uvIndexEl = document.createElement("div");
    uvIndexEl.textContent = "UV Index: "
    uvIndexEl.classList = "list-group-item"

    uvIndexValue = document.createElement("span")
    uvIndexValue.textContent = index.value

    if(index.value <=2){
        uvIndexValue.classList = "favorable"
    }else if(index.value >2 && index.value<=8){
        uvIndexValue.classList = "moderate "
    }
    else if(index.value >8){
        uvIndexValue.classList = "severe"
    };

    uvIndexEl.appendChild(uvIndexValue);
    weatherContainerEl.appendChild(uvIndexEl);
}
// Sending Call Request to Openweather and Retriving 5 Days Forcast
var get5Day = function(city){
    var apiKey = "8a53c204fdc7aafec86bf779403642e0"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           display5Day(data);
        });
    });
};
// Displaying 5 Days Forcast
var display5Day = function(weather){
    forecastContainerEl.textContent = ""
    forecastTitle.textContent = "5-Day Forecast:";

    var forecast = weather.list;
        for(var i=5; i < forecast.length; i=i+8){
       var dailyForecast = forecast[i];
       
       var forecastEl=document.createElement("div");
       forecastEl.classList = "card bg-primary text-light m-2";

       //Declare & Appending Date Element
       var forecastDate = document.createElement("h5")
       forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM D, YYYY");
       forecastDate.classList = "card-header text-center"
       forecastEl.appendChild(forecastDate);

       
       //Declare and Appending Image Element
       var weatherIcon = document.createElement("img")
       weatherIcon.classList = "card-body text-center";
       weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);  

       //Declare and Appending Forecast Element
       forecastEl.appendChild(weatherIcon);
       
       //Declare and Appending Temperature (span) Element
       var forecastTempEl=document.createElement("span");
       forecastTempEl.classList = "card-body text-center";
       forecastTempEl.textContent = dailyForecast.main.temp + " °F";
       forecastEl.appendChild(forecastTempEl);

      //Declare and Appending Humidity (span) Element
       var forecastHumEl=document.createElement("span");
       forecastHumEl.classList = "card-body text-center";
       forecastHumEl.textContent = dailyForecast.main.humidity + "  %";
       forecastEl.appendChild(forecastHumEl);

      //Appending to 5 Days Forcast Card
        forecastContainerEl.appendChild(forecastEl);
    }

}
// Declare Past-Search Function 
var pastSearch = function(pastSearch){
 
    pastSearchEl = document.createElement("button");
    pastSearchEl.textContent = pastSearch;
    pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
    pastSearchEl.setAttribute("data-city",pastSearch)
    cityFormEl.setAttribute("type", "submit");

    pastSearchButtonEl.prepend(pastSearchEl);
}


var pastSearchHandler = function(event){
    
    var city = event.target.getAttribute("data-city")
    if(city){
        getCityWeather(city);
        get5Day(city);
    }
}

// Declare Clear History Function
clearEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

//  Add Event Listner When Search Button is Clicked to Lunch the Application & Clear History Functions  
cityFormEl.addEventListener("submit", formSumbitHandler);
pastSearchButtonEl.addEventListener("click", pastSearchHandler);