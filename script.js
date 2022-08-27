//selectors
let cityInput = document.querySelector(".cityName")
let btn1 = document.querySelector(".submitButton")


//API FETCHING
btn1.addEventListener("click", function(name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)
    .then(response => response.json()) //text ---> json
    .then(data =>{
        let result = `<div><h1>City : ${data.name}</h1>
        <h3>temperature : ${Math.floor(data["main"].temp-273)} °C</h3>
        <h3>Description:  : ${data['weather'][0]['description']}</h3>
        <h3>Humidity:  : ${data['main']['humidity']} %</h3>
        <h3>Wind Speed:  : ${data['wind']['speed']} m/s</h3>
        </div>`
        
        let container = document.querySelector(".data_container")
        container.innerHTML += result
        console.log(data);
    }).catch(err => alert("Invalid city name!!"))
})
