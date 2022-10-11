import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './contact.css';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MyLocation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const center = useMemo(() => ({ lat: 41.76371, lng: -72.685097 }), []);

  return (
    <div className='h-100'>
      <GoogleMap zoom={10} center={center} mapContainerClassName="test border border-3 border-fourth h-100">
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MyLocation;
