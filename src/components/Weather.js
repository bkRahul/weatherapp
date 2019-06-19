import React from "react";

import Forecast from "./Forecast"

const Weather = (props) => {

  function getDayName(dateStr, locale)
  {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }

  return (
    <div className="weather_container">

      <div className="top_content">
      {props.weather.city && <p>{props.weather.city.name}, {props.weather.city.country}</p>}
      {props.weather.city && <p>{getDayName(props.weather.list[8].dt_txt.substring(0, 10))}</p>}
      </div>

<div className="mid_content">
<div className="left">
      {props.weather.city && <div><img src={"http://openweathermap.org/img/w/" + props.weather.list[8].weather[0].icon + ".png"} /></div>}
      {props.weather.city && <p className="mid_content_temp">{props.weather.list[8].main.temp}<span className="temp_icon">°F</span></p>}
      </div>



      <div className="right">
      {props.weather.city && <p className="right_description">{props.weather.list[8].weather[0].description}</p>}
      {props.weather.city && <p>Humidity :{props.weather.list[8].main.humidity}%</p>}
      {props.weather.city && <p>Wind :{props.weather.list[8].wind.speed} mph</p>}
      </div>
</div>







      {props.error && <h1>{props.error}</h1>}

    <div className="forecast_container">
{props.weather.city && 
  props.weather.list.slice(2).filter((_,i) => i % 8 == 0).map(forecast => (
  <Forecast forecast={forecast} key={forecast.dt}/>
  ))}
</div>

    </div>
  );
};

export default Weather;