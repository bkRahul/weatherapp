import React from "react";


const Form = (props) => {

  return (
    <div className="form_container">
<form onSubmit={props.getWeather} className="form">
              <div className="field">
                <div className="control">
                <input
                    className="input"
                    type="text"
                    name="city"
                    placeholder="Search by City Name or Zipcode"
                  />

                </div>
              </div>
              <div className="control button_container">
                <button className="button is-primary">Get Weather</button>
              </div>
            </form>
    </div>
  );
};

export default Form;