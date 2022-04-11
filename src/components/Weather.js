import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer,Temp,City} from './WeatherStyles'


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=imperial&appid=8be19b6a48a45b9aaab8467d00a2787b';

const Weather = () => {
    const [data,setData] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })
    },[])

    console.log(data);

    if (!data) return null;

  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>Istanbul, TR</City>
    </WeatherContainer>
  )
}

export default Weather