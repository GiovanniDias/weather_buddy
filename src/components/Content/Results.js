import React from 'react'
import Card from '../Card'

export const OldResults = ({array}) => (
  <div className="card-container">
    {array.map((data, index) => (
      <Card key={index} {...data}/>
    ))}
  </div>
)

OldResults.defaultProps = {
  array: []
}

const MainResult = ({data}) => (
  <Card {...data}/>
)

export default MainResult