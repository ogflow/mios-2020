import React, { useState } from 'react'
import './TextField.scss'

const TextField = ({ label, name, required, autocomplete = 'off' }) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className={"text-field"
      + (focus ? " is-focused" : "")
      + (value.length ? " has-value" : "")
    }>
      <p className="label text-caption">{label}</p>
      <p className="placeholder">{label}</p>
      <input type="text" name={name} required={!!required} autoComplete={autocomplete} 
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onInput={(e) => setValue(e.target.value)} />
      <div className="border"></div>
    </div>
  )
}

export default TextField