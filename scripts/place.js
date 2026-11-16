const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

// Set the page's "last modified" date and time.

document.getElementById("lastModified").textContent = document.lastModified

const temperature = 10;

const windSpeed = 5;

function calculateWindChill(temperature, windSpeed)

{

    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);

}

windChill = ""

if (temperature <= 10 && windSpeed > 4.8)

{
    
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;

}

else

{
    
    windChill = "N/A"

}

document.getElementById("wind-chill").textContent = windChill