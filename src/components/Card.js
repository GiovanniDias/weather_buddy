import React from "react"

const Card = ({title, content, footer}) => (
  <div className="card">
    <div className="card-section">{title}</div>
    <div className="card-section card-content">{content}</div>
    <div className="card-section">{footer}</div>
  </div>
)

export default Card;