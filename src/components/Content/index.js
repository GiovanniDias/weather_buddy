import React, { useState } from 'react'
import InputMessage from './InputMessage'
import NotFoundMessage from './NotFoundMessage'
import MainResult, {OldResults} from './Results'

export const Content = () => {
  const [data, setData] = useState()
  const [isFirstRequest, setIsFirstRequest] = useState(true)

  return (
    <div>
      <InputMessage />
      { 
        !isFirstRequest &&
        (
          !data
          ?<NotFoundMessage />
          :<MainResult />
        )
      }
      {
        !isFirstRequest &&
        <OldResults />
      }
    </div>
  )
}