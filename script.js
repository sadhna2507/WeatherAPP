//selectors
let cityInput = document.querySelector(".cityName")
let btn1 = document.querySelector(".submitButton")


//API FETCHING
btn1.addEventListener("click", function(name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)
    .then(response => response.json()) //text ---> json
    .then(data =>{
        let result = `<div><h1>City : ${data.name}</h1>
        <h2>Temperature : ${Math.floor(data["main"].temp-273)} °C</h2>
        <h2>Description:  : ${data['weather'][0]['description']}</h2>
        <h2>Humidity:  : ${data['main']['humidity']} %</h2>
        <h2>Wind Speed:  : ${data['wind']['speed']} m/s</h2>
        </div>`
        
        let container = document.querySelector(".data_container")
        container.innerHTML = result
        console.log(data);
    }).catch(err => alert("Invalid city name!!"))
})
