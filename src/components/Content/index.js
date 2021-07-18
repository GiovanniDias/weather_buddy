import React, { useState, useEffect } from 'react'
import InputMessage from './InputMessage'
import NotFoundMessage from './NotFoundMessage'
import MainResult, { OldResults } from './Results'
import { getWeatherInfo } from '../../services/requests'

export const Content = () => {
  const [data, setData] = useState()
  const [array, setArray] = useState([data, data, data, data, data])
  const [isFirstRequest, setIsFirstRequest] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        if(!isFirstRequest) setArray(await getWeatherInfo())
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [isFirstRequest])

  return (
    <div className="container container-content">
      <div className="row">
        <InputMessage isFirstRequest={isFirstRequest} setIsFirstRequest={setIsFirstRequest} setResponse={setData}/>
      </div>
        { 
          !isFirstRequest &&
          (
            <div className="row">
              {
                !data
                ?<NotFoundMessage />
                :<MainResult data={data}/>
              }
            </div>
          )
        }
        {
          !isFirstRequest &&
          <div className="row">
            <OldResults array={array}/>
          </div>
        }
    </div>
  )
}