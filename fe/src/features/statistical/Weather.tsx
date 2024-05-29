import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Ho Chi Minh City',
            appid: '63bb4a1949b3707b8d91f93be4e7194d',
            units: 'metric' // Để lấy nhiệt độ theo độ C
          }
        });
        setWeatherData(response.data);
      } catch (error) {
        // @ts-ignore
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (

    <div>
      {/*@ts-ignore*/}
      <h1>Thời tiết hiện tại ở {weatherData.name}</h1>
      {/*@ts-ignore*/}
      <p>🌡️ Nhiệt độ: {weatherData.main.temp}°C</p>
      {/*@ts-ignore*/}
      <p>☀️ Thời tiết: {weatherData.weather[0].description}</p>
      {/*@ts-ignore*/}
      <p>💧 Độ ẩm: {weatherData.main.humidity}%</p>
      {/*@ts-ignore*/}
      <p>🍃 Tốc độ gió: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
