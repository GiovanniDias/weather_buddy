import React from "react"

const Card = ({title, content, footer}) => (
  <div className="card">
    <div className="card-header">{title}</div>
    <div className="card-content">{content}</div>
    <div className="card-footer">{footer}</div>
  </div>
)

export default Card;