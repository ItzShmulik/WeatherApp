const apiKey = "enter api key here"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const cityNameTitle = document.getElementById("city-name");
const searchInput = document.getElementById("search");
const tempSpan = document.getElementById("temp");
const searchButton = document.getElementsByTagName("button")[0];

let cityName;


// Initial Text
fetch(apiUrl + "Tel Aviv&units=metric&appid=" + apiKey)
    .then(response => response.json())
    .then(data => tempSpan.innerText = data.main.temp + "°C")
    .catch(error => console.log(error))
;

searchButton.addEventListener("click", () => {
    cityName = searchInput.value;
    searchInput.value = "";
    cityNameTitle.innerText = cityName;
    updateData(cityName);
});
function updateData(cityName){
    fetch(apiUrl + cityName + "&units=metric&appid=" + apiKey)
        .then(response => response.json())
        .then(data => tempSpan.innerText = data.main.temp + "°C")
        .catch(error => {
            console.log(error);
            searchInput.placeholder = "Invalid";
            }
        )
    ;
}