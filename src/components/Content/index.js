import React, { useState } from 'react'
import InputMessage from './InputMessage'
import NotFoundMessage from './NotFoundMessage'
import MainResult, {OldResults} from './Results'

export const Content = () => {
  const [data, setData] = useState({title: "City Name", content: "22ºC", footer: "sunny"})
  const [isFirstRequest, setIsFirstRequest] = useState(false)

  return (
    <div>
      <InputMessage/>
      { 
        !isFirstRequest &&
        (
          !data
          ?<NotFoundMessage />
          :<MainResult data={data}/>
        )
      }
      {
        !isFirstRequest &&
        <OldResults array={[data, data, data, data, data]}/>
      }
    </div>
  )
}