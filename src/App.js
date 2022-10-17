import './App.css';
import { useEffect, useState } from 'react'
import Weather from './Components/Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setisLoading(false)
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }
  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  else {
  return (
      <div>
        <h2>Your position is</h2>
        <p>
          Position:&nbsp;
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App;
