// function geoCoding() {
//   fetch(" https://geocoding-api.open-meteo.com/v1/search?name=london")
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }

// console.log(geoCoding());
// export function FetchApi() {
//   fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=17.41&hourly=temperature_2m"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }
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
    console.log(weatherData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
