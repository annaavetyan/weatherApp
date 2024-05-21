import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {
    changeInputText,
    getWeatherData,
    setLocation,
} from "../../redux/weatherPageReducer";


const mapStateToDispatch = (state) => {
    return {
        inputText: state.weatherPage.inputText,
        weatherData: state.weatherPage.weatherData
    }
}

export const HeaderContainer = connect(mapStateToDispatch, {changeInputText, getWeatherData, setLocation})(Header)