import React from 'react'
import './Button.scss'

const Button = ({ children }) => (
  <button className="button">
    <span>{children}</span>
  </button>
)

export default Button