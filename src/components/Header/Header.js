import React from "react";
import classes from "./header.module.css";
import axios from "axios";

const API_KEY = '6dc387d5c1159abe6a24c28e75a1455c';

const Header = (props) => {
    const onchange = (e) => {
        props.changeInputText(e.target.value)
    }

    const getWeatherData = async (e) => {
        try {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.inputText}&units=imperial&appid=${API_KEY}`
            const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.inputText}&units=imperial&appid=${API_KEY}`

            const currentWeatherData = await axios.get(weatherURL);
            const forecastWeatherData = await axios.get(forecastURL);

            const weatherData = {
                currentWeatherData: {...currentWeatherData.data},
                forecastWeatherData: [...forecastWeatherData.data.list]
            }

            props.setLocation(props.inputText);

            props.getWeatherData(weatherData)

        } catch (error) {
            alert('something wrong');
        }
    }

    return (
        <header className={classes.header}>
            <div/>
            <div>

                <input value={props.inputText} name={'city'} className={classes.cityInput} onChange={onchange}/>
                <button onClick={getWeatherData}>{'Search City'}</button>

            </div>
            <div></div>
        </header>
    )
}

export default Header
