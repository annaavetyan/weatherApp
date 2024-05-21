import React from "react";
import {connect} from "react-redux";
import {getWeatherData} from "../../redux/weatherPageReducer";
import WeatherPage from "./WeatherPage";

const mapStateToProps=  (state) => {
    return {
        weatherData: state.weatherPage.weatherData,
        location:state.weatherPage.location,
    }
}


export const WeatherPageContainer = connect(mapStateToProps, {getWeatherData})(WeatherPage)