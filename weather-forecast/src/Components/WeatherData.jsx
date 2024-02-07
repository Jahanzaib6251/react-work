// orignal 
import '../App.css';
import  { useEffect, useState } from 'react';

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [myData, setMyData] = useState({})
  
  const getMyPostData =async ()=>{
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d222781c4065264867116c8e79592c53`)
      const data =await response.json()
      setMyData(data)
      setIsLoading(false)
    } 
    catch (error) {
      console.error(error)
    } 
  };

  useEffect(() => {
    console.log(myData);
  }, [myData])
  
  return (
    <div className="weather-data">
      <div>
        <input
          type="text"
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={getMyPostData}>Get Weather Info</button>
        {isLoading ? (
          <p>Loading...</p>
        ) : myData.name ? (
          <div>
            <h2>City: {myData.name}</h2>
            <p>Temperature: {myData.main.temp} K</p>
            <p>Humidity: {myData.main.humidity}%</p>
            <p>Wind Speed: {myData.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Data is not Available.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherData