
import './App.css';

import {HeaderContainer} from "./components/Header/HeaderContainer";
import { WeatherPageContainer} from "./components/WeatherPage/WeatherPageContainer";

function App() {
    return (
        <div className="weather-App">
            <HeaderContainer/>
            <WeatherPageContainer/>
        </div>
    );
}

export default App;
