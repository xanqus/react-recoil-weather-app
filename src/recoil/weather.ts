import { atom, selector } from 'recoil';
import axios from 'axios';

export const currentTest = atom<number>({
  key: 'test',
  default: 100,
});

export const currentLatitude = atom<number>({
  key: 'latitude',
  default: 1,
});
export const currentLongitude = atom<number>({
  key: 'longitude',
  default: 1,
});

export const getCurrentWeather = selector<string>({
  key: 'asyncState',
  get: async ({ get }) => {
    const test: number = get(currentTest);
    const latitude: number = get(currentLatitude);
    const longitude: number = get(currentLongitude);
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a25c70fac96a793def27ab062cabf4c2&units=metric`
    );
    console.log(data);
    return `온도는 ${data.data.main.temp}이고 도시는 ${data.data.name}이며, 가져온 데이터는 ${test}입니다`;
  },
});
