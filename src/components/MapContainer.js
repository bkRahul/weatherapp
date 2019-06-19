import React from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer = (props) => {

  const weather = props.weather;

// const lat = weather.city.coord.lat;
// const lng = weather.city.coord.lng;


// console.log(lat);
// console.log(lng);

// // {console.log(weather.city.coord.lat)}

        return (
            <div className="map-comp">
            {/* {weather.city && <p>{weather.city.coord.lat}</p>}     
            {weather.city && <p>{weather.city.coord.lon}</p>}    */}
            {weather.city && <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              center={{ lat: weather.city.coord.lat, lng: weather.city.coord.lon}}
              initialCenter={{ lat: weather.city.coord.lat, lng: weather.city.coord.lon}}
            >
              <Marker position={{ lat: weather.city.coord.lat, lng: weather.city.coord.lon}} />
              
            </Map>}
            </div>
        );

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-AmeM0nm2QIgr-7M2-N879O1NOzJoiPA'
})(MapContainer);