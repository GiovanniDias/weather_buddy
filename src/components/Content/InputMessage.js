import React, {useState} from 'react'
import { fetchData } from '../../services/requests'

const InputMessage = () => {
  const [data, setData] = useState("")

  const handleChange = (event) => {
    setData(event.target.value)
  }

  const handleBlur = () => {
    if(data) fetchData(data)
  }

  const handleKeyPress = (event) => {
    if (event.key === ''){
      fetchData(data)
    }
  }
  
  return (
    <div className="content-text">
      How is the weather in
      <input
        autoFocus
        type="text" 
        value={data}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
      now?
    </div>
  )
}
export default InputMessage;