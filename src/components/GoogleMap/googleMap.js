import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
  marginTop: '20px',
  marginLeft: '200px',
};


const MapContainer = ({latitud, longitud, name, ...props}) => {
  const [activeMarker, setActiveMaker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMaker(marker)
    setShowingInfoWindow(true)
  };


  const onClose = props => {
    if (showingInfoWindow) {
      setActiveMaker(null);
      setShowingInfoWindow(false);
    }
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
       lat: latitud,
       lng: longitud,
      }}
    >
      <Marker
        onClick={onMarkerClick}
        name={name}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiTShznpOKqQN7g4iQOwVaf0kRIm-IL9k'
})(MapContainer);
