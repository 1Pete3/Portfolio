import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './contact.css'

 const MyLocation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR API KEY",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const Map = () => {
  const center = useMemo(() => ({ lat:41.763710, lng: -72.685097}), []);

  return (
    <GoogleMap zoom={9} center={center} mapContainerClassName="map-container border border-3 border-fourth">
      <Marker position={center} />
    </GoogleMap>
  );
}
 
export default MyLocation;