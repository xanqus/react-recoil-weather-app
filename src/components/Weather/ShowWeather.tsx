import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  getCurrentWeather,
  currentLatitude,
  currentLongitude,
} from '../../recoil/weather';

type ShowWeatherProps = {
  weather: string;
};

const ShowWeather = ({ weather }: ShowWeatherProps) => {
  const setLatitude = useSetRecoilState<number>(currentLatitude);
  const setLongitude = useSetRecoilState<number>(currentLongitude);

  const success = (position: any) => {
    const latitude: number = position.coords.latitude;
    const longitude: number = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  };
  const error = () => {
    console.log('Unable to retrieve your location');
  };
  if (!navigator.geolocation) {
    console.log('not supported');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  const currentWeather: string = useRecoilValue(getCurrentWeather);

  return (
    <>
      <div>{currentWeather}</div>
      <div>weather is {weather}</div>
    </>
  );
};

export default ShowWeather;
