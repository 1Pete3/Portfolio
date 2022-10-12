import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {useState,useEffect} from 'react'
import './contact.scss';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MyLocation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

  
  

const Map = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const center = useMemo(() => ({ lat: 41.76371, lng: -72.685097 }), []);
  useEffect(() => {
    window.addEventListener("resize", function() {
        setWindowWidth(window.innerWidth)
    })
}, [])

  
  return (
    <div className='h-100 w-100 '>
      <GoogleMap zoom={10} center={center} mapContainerClassName={windowWidth > 767 ? "w-100 h-100 border border-3 border-fourth" : "test border border-3 border-fourth"}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MyLocation;
