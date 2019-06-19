import React from "react";

const Forecast = (props) => {

    function getDayName(dateStr, locale)
    {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'short' });        
    }

  return (
    <div className="forecast_item">
       { console.log(props.forecast.main.temp)}
       {props.forecast.dt_txt && <p>{getDayName(props.forecast.dt_txt.substring(0, 10))}</p>}
      {props.forecast.weather[0].icon && <div><img src={"https://openweathermap.org/img/w/" + props.forecast.weather[0].icon + ".png"} /></div> }
      {props.forecast.main.temp && <p>{props.forecast.main.temp}</p>}
    </div>
  );
};

export default Forecast;