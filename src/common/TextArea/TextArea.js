import React, { useState } from 'react'
import './TextArea.scss'

const TextArea = ({ label, name, required, rows = 6 }) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className={"text-field text-area"
      + (focus ? " is-focused" : "")
      + (value.length ? " has-value" : "")
    }>
      <p className="label text-caption">{label}</p>
      <p className="placeholder">{label}</p>
      <textarea name={name} required={!!required} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onInput={(e) => setValue(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea