import adapter from '../adapters'
import { formatData } from '../utils'

export const getCityWeather = async (cityName) => {
  try{
    const url = `weather/${cityName}`
    const data = (await adapter.get(url)).data
    return formatData(data)
  }catch(e){
    console.log(e)
  }
}

export const getWeatherInfo = async (numToRetrieve = 5) => {
  try{
    const url = `weather?max=${numToRetrieve}`
    const data = (await adapter.get(url)).data.data
    return data.map(item => formatData(item))
  } catch(e) {
    console.log(e)
  }
}