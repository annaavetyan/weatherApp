import React from "react";

const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";
const GET_WEATHER_DATA = "GET_WEATHER_DATA";
const SET_LOCATION = 'SET_LOCATION';

const initialState = {
    weatherData: {
        currentWeatherData: [],
        forecastWeatherData: [],
    },
    inputText: '',
    location: ''
}

const weatherPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_INPUT_TEXT: {
            state = {...state, inputText: action.text};

            return state
        }
            ;
        case GET_WEATHER_DATA: {
            state = {...state, weatherData: {...action.weatherData}}

            return state
        }
            ;
        case SET_LOCATION: {
            state = {...state, location: action.location}
            return state
        }
            ;
        default :
            return state
    }
}

export const changeInputText = (text) => {
    return {
        type: CHANGE_INPUT_TEXT,
        text: text
    }
}

export const getWeatherData = (weatherData) => {

    return {
        type: GET_WEATHER_DATA,
        weatherData: weatherData,
    }
}

export const setLocation = (location) => {
    return {
        type: SET_LOCATION,
        location: location,
    }
}


export default weatherPageReducer