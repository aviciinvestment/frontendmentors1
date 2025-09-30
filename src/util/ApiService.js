export async function searchLocations(query) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
    );
    const data = await response.json();
    if (!data.results) {
      console.log("No Location Found");
      return [];
    }
    return data.results.map((location) => ({
      name: location.name,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude,
    }));
  } catch (error) {
    console.error("Error fetching Location data:", error);
    return [];
  }
}

export async function FetchApi(city, unit) {
  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      console.log("City not found");
      return;
    }
    const { latitude, longitude } = geoData.results[0];
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,precipitation,relative_humidity_2m,wind_speed_10m,weather_code&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&past_days=7&${
        unit == "metric"
          ? "wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
          : ""
      }`
    );
    const weatherData = await weatherResponse.json();
    console.log(unit);
    return weatherData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
