import React, {useEffect} from "react";
import classes from '../WeatherPage/weatherPage.module.css';
import {useLocation} from 'react-router-dom';
import moment from 'moment';

const WeatherPageContent = (props) => {
    const {currentWeatherData, forecastWeatherData} = props;

    const pathName = useLocation().pathname;
    const date = pathName.substring(0, pathName.indexOf("%")).substring(1) || moment().format('YYYY-MM-DD');

    const forecastWeatherDataForDate = forecastWeatherData.filter((data) => {
        if (data.dt_txt.includes(date)) {
            return data
        } else {
            return
        }
    });

    return (
        <div className={classes.weatherDataconainer}>
            <div className={classes.mainPart}>
                <div>
                    <p className={classes.cityName}>{currentWeatherData?.name}</p>
                    <p>{currentWeatherData.main.temp}C</p>
                    <img src={currentWeatherData.weather[0].icon}/>
                    <p>{currentWeatherData.weather[0].main}</p>

                </div>
            </div>
            <div className={classes.rightPart}>

                <ul>
                    {
                        forecastWeatherDataForDate.map((data) => {
                            return (
                                <li className={classes.weatherItem}>
                                    <p className={classes.weatherItemElem}>{data.dt_txt.split(" ")[1]}</p>
                                    <p className={classes.weatherItemElem}>{data.main.temp}C</p>
                                    <img src={data.weather[0].icon}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WeatherPageContent