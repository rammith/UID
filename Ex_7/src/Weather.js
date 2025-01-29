// src/Weather.js
import React, { useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = 'be7a70d36e43f2573e859efab60ba785';

  const fetchWeather = async () => {
    try {
      const cityName = encodeURIComponent(city);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        } else if (response.status === 401) {
          throw new Error('Invalid API key');
        } else {
          throw new Error('Something went wrong');
        }
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-data">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
