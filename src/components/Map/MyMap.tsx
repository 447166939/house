import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withGoogleMap((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 39.9042, lng: 116.4074 }}>
    <Marker position={{ lat: 39.9042, lng: 116.4074 }} />
  </GoogleMap>
));

export default MyMap;
