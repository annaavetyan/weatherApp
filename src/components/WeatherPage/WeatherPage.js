import React, {useEffect} from "react";
import axios from "axios";
import WeatherPageContent from "./WeatherPageContent";
import WeatherPageNavBar from './WeatherPageNavBar';

const API_KEY = '6dc387d5c1159abe6a24c28e75a1455c';

const WeatherPage = (props) => {
    const {weatherData, location, getWeatherData} = props;
    const currentWeatherData = weatherData.currentWeatherData;
    const forecastWeatherData = weatherData.forecastWeatherData;

    useEffect(() => {
        if (!location) {
            handleCurrentLocation()
        }
    }, []);

    const getCurrentWeatherData = async (latitude, longitude) => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`

        try {

            const currentWeatherData = await axios.get(weatherURL);
            const forecastWeatherData = await axios.get(forecastURL);

            const weatherData = {
                currentWeatherData: {...currentWeatherData.data},
                forecastWeatherData: [...forecastWeatherData.data.list],
            }

            getWeatherData(weatherData)
        } catch (error) {

        }

    }

    function handleCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        } else {
            console.log("Geolocation not supported");
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Make API call to OpenWeatherMap
        getCurrentWeatherData(latitude, longitude)
    }


    return (
        Object.keys(currentWeatherData).length && Object.keys(forecastWeatherData).length && <div>
            <WeatherPageContent
                currentWeatherData={currentWeatherData}
                forecastWeatherData={weatherData.forecastWeatherData}
            />
            <WeatherPageNavBar
                forecastWeatherData={weatherData.forecastWeatherData}
            />
        </div>

    )

}

export default WeatherPage