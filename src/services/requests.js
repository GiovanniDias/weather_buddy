import {formatData} from '../utils'

const info = {name: "City Name", main: { temp: "22ºC" }, weather: [{ main:"Sunny" }]}
const infoArray = [info, info, info, info, info]

export const getCityWeather = async () => {
  const data = formatData(info)
  return data
}

export const getWeatherInfo = async () => {
  const data = infoArray.map(item => formatData(item))
  return data
}