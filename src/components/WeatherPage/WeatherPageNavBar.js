import React, {useEffect, useState} from "react";
import classes from './weatherPage.module.css';
import {Link} from "react-router-dom";

const WeatherPageNavBar = (props) => {
    const [forecastWeatherData, setForecastWeatherData] = useState([]);

    useEffect(() => {
        const newForecastWeatherData = [...props.forecastWeatherData]
            .map((data) => {
                const date = data.dt_txt.substring(0, data.dt_txt.indexOf(" "));

                return {
                    ...data,
                    date: date
                }
            })

        let arr = [];

        const newForecast =  newForecastWeatherData.filter((data) => {
            if (!arr.includes(data.date)) {
                arr.push(data.date)
                return data
            } else {
                return
            }
        });

        setForecastWeatherData(newForecast)

    },[])

    return (
        <div>
            {
                <div className={classes.weatherNavBarList}>
                    {
                        forecastWeatherData.map((data) => {
                            return (
                                <div className={classes.weatherNavBarItem}>
                                    <Link to={`${data.dt_txt}`} className={classes.weatherNavBarItemInner}>
                                        <p>{data.dt_txt}</p>
                                        <img src={data.weather[0].icon}/>
                                        <p>{data.main.temp}</p>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>

            }
        </div>
    )
}

export default WeatherPageNavBar