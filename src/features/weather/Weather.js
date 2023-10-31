import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, fetchWeather } from './weatherSlice';



export default function Weather() {
  	
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);


  const weatherStatus = useSelector(state => state.weather.status);
  const error = useSelector(state => state.weather.error);


  useEffect(() => {
    if (weatherStatus === 'idle') {
      dispatch(fetchWeather())
    }
  }, [weatherStatus, dispatch]);

  let content;

  if (weatherStatus === 'loading') {
    content = <p>Weather is currently loading</p>
  } else if (weatherStatus === 'succeeded') {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    content = 
    <div className='Weather'>
      <img src={iconUrl} width="80px"/>
      <p>{`Weather outside: ${weather.weather[0].description} `} </p>
      <p>{`Current temperature: ${weather.main.temp} degrees `} </p>
    </div>;
  } else if (weatherStatus === 'failed') {
    content = <div>{error}</div>;
  } 


  return (
    <section className="WeatherSection">
      {content}
    </section>
  )
}
