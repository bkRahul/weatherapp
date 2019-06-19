import React from "react";
import "./App.scss";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import MapContainer from "./components/MapContainer"

const APP_ID = "cc4ad892a1b4522db3a4233b7fb39df3";

class App extends React.Component {
  
  state = {
    weather : [],
    error: ""

  }

  getWeather = async(e) => {
e.preventDefault()
const CITY_NAME = e.target.elements.city.value;

try {
    const request = 
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${APP_ID}&units=imperial`)
    const data = await request.json();
    if(!CITY_NAME == "") {

      this.setState({
        weather : data,
        error:""

    })
    }else {
        this.setState({
          weather : [],
          error : "Please Enter valid City"    
        })

        }
      }catch (err) {
        console.log(err);
        this.setState({  weather : [],
          error : err    })
      }
  }

  render() {
  return (
    <div className="app_container">
      <div className="weather_section">
      <Titles />
      <Form getWeather={this.getWeather} />
      <Weather {...this.state } />
      </div>
      <div className="map_section">
      <MapContainer {...this.state } />
</div>
    </div>
  );
};
}

export default App;