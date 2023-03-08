const apiKey = '8e8e45697ffef96dffadb26b88253653';


const getWeather = async (cityName = 'Hargeisa') =>{
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
const res = await fetch(url);

const data = await res.json();

console.log(data);
}

getWeather('london');


async function getWeather2(cityName = 'Hargeisa') {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const res = await fetch(url);

    const data = await res.json();

    console.log(data);
}