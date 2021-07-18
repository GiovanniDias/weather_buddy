import React, {useState} from 'react'
import { getCityWeather } from '../../services/requests'

const InputMessage = ({isFirstRequest, setIsFirstRequest, setResponse}) => {
  const [data, setData] = useState("")
  const [locked, setLocked] = useState(false)

  const handleChange = (event) => {
    setData(event.target.value)
    setLocked(false)
  }

  const fetchData = async() => {
    setLocked(true)
    setResponse(await getCityWeather(data))
    setIsFirstRequest(false)
  }

  const handleBlur = () => {
    if(data && !locked) fetchData()
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && data){
      fetchData()
    }
  }
  
  return (
    <div className={isFirstRequest ? "content-text" : "content-text tiny-text"}>
      <span>How is the weather in</span>
      <input
        className={isFirstRequest ? "" : "tiny-text"}
        autoFocus
        type="text" 
        value={data}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
      <span>now?</span>
    </div>
  )
}
export default InputMessage;