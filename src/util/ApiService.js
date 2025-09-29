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

export async function FetchApi(city) {
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
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    );
    const weatherData = await weatherResponse.json();
    return weatherData.hourly.temperature_2m;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
