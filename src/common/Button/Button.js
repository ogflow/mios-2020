import React from 'react'
import './Button.scss'

const Button = props => {
  const { children } = props

  return (
    <button className="button" {...props}>
      <span>{children}</span>
    </button>
  )
}

export default Button