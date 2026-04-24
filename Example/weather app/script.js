async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "b46875a58ebe531eb56b3b88994f1e2e";

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // ❗ Handle API errors
        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `🌡 Temp: ${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("desc").innerText = `☁ ${data.weather[0].description}`;

    } catch (error) {
        console.error(error);
        alert("Failed to fetch weather data. Check internet or API key.");
    }
}

