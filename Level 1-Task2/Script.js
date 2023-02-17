function convertToCelsius() {
    let temperature = document.getElementById("temperature").value;
    let celsius = (temperature - 32) * 5/9;
    document.getElementById("result").innerHTML = `${celsius.toFixed(2)}°C`;
  }
  
  function convertToFahrenheit() {
    let temperature = document.getElementById("temperature").value;
    let fahrenheit = temperature * 9/5 + 32;
    document.getElementById("result").innerHTML = `${fahrenheit.toFixed(2)}°F`;
  }
