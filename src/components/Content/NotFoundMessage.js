import React from 'react'

const NotFoundMessage = ({message}) => (
  <div className="content-not-found">
    {message}
  </div>
)

NotFoundMessage.defaultProps = {
  message: "Sorry. We couldn't find the specified city."
}

export default NotFoundMessage;