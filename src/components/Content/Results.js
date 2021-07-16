import React from 'react'
import Card from '../Card'

export const OldResults = ({array}) => (
  <div>
    {array.map(data => (
      <Card />
    ))}
  </div>
)

OldResults.defaultProps = {
  array: []
}

const MainResult = ({data}) => (
  <Card />
)

export default MainResult