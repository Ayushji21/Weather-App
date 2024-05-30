const apiKey = "4e687098992319ca750b7ed2c23e90ab"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mathura"

// let a = document.getElementById("#cityname")
// async function checkWeather(city){
//    a.innerHTML = city
//     console.log(city)
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`+ `&appid=${apiKey}`);
//     let data = await response.json();

//     console.log(response)

//     console.log(data);
//     console.log(data.main)
// }

let weather = fetch(apiUrl+ `&appid=${apiKey}`).then(response => response.json() ).then((response) => console.log(response))
 console.log(response)

// checkWeather("mathura")