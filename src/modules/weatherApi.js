export async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${location}&key=81f814f5795a492392023803232405`
  );
  const weatherData = await response.json();
  return weatherData;
}
