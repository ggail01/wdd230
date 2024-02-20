// ---WEATHER---

const weather = document.querySelector('.weather-container');
const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '1d3a20aeacdc22dc3e6e761d3de471f8';

async function apiFetch() {
    const latitude = 10.27;
    const longitude = 123.07;

    const apiUrl = `${url}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    const forecastURL = `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(apiUrl);
        const forecastResponse = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            const forecast = await forecastResponse.json();
            displayResults(data, forecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data, forecast) {
    let currentTable = document.createElement('table');
    let currentHeader = document.createElement('thead');
    let currentBody = document.createElement('tbody');
    let currentRow = document.createElement('tr');
    let currentHeadSpan = document.createElement('th');
    
    let currentData = document.createElement('td');
    let icon = document.createElement('img');
    let iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    
    currentHeadSpan.textContent = 'Current Weather';
    currentHeadSpan.setAttribute('colspan', '3');
    currentHeader.appendChild(currentHeadSpan);
    currentTable.appendChild(currentHeader);

    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', description);
    currentData.appendChild(icon);
    currentRow.appendChild(currentData);

    currentData = document.createElement('td');
    currentData.innerHTML = `${data.main.temp}°F`;
    currentRow.appendChild(currentData);

    currentData = document.createElement('td');
    currentData.innerHTML = `${data.weather[0].description}`;
    currentRow.appendChild(currentData);

    currentBody.appendChild(currentRow);
    currentTable.appendChild(currentBody);


    let forecastTable = document.createElement('table');
    let forecastHead = document.createElement('thead');
    let forecastBody = document.createElement('tbody');
    let forecastRow = document.createElement('tr');
    let forecastContext = document.createElement('th');
    forecastContext.textContent = '3-Day Forecast';
    forecastContext.setAttribute('colspan', '3');
    forecastHead.appendChild(forecastContext);
    forecastTable.appendChild(forecastHead);

    for (let i = 0; i < 3; i++) {
        let forecastData = document.createElement('td');
        let icon = document.createElement('img');
        let iconSrc = `https://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
        let description = forecast.list[i].weather[0].description;
        icon.setAttribute('src', iconSrc);
        icon.setAttribute('alt', description);
        forecastData.appendChild(icon);
        forecastData.innerHTML += `<br>${forecast.list[i].main.temp}°F`;
        forecastRow.appendChild(forecastData);
    }
    forecastBody.appendChild(forecastRow);
    forecastTable.appendChild(forecastBody);
    forecastTable.setAttribute('id', 'forecast');
    currentTable.setAttribute('id', 'current');
    weather.appendChild(currentTable);
    weather.appendChild(forecastTable);
}

apiFetch();