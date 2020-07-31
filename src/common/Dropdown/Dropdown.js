import React, { useState, useRef } from 'react'
import './Dropdown.scss'

const Dropdown = ({ label, name, options, required }) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState(null)
  const selectRef = useRef()

  const handleClick = function (e) {
    if (focus === false) {
      document.addEventListener('click', () => {
        setFocus(false)
      }, { once: true })
    }

    setFocus(!focus)
  }

  const handleSelect = function (val) {
    setFocus(false)
    setValue(val)
    selectRef.current.value = val
  }

  return (
    <div className={"dropdown" + (focus ? " is-focused" : "")}>

      <div className={"text-field"
        + (!!value ? " has-value" : "")
        + (focus ? " is-focused" : "")
      }>
        <p className="label text-caption">{label}</p>
        <p className="placeholder">{label}</p>
        <div className="select" onClick={handleClick}>{value}</div>
        <div className="border"></div>
      </div>

      <ul className="option-list">{
        options.map((val, i) => {
          const isSelected = val === value
          return (
            <li 
              className={"option" + (isSelected ? " is-selected" : "")} 
              onClick={() => handleSelect(val)} key={i}
            >
              {val}
            </li>
          )
        })
      }</ul>

      <select required={!!required} name={name} ref={selectRef}>
        <option></option>
        {
          options.map((value, i) => (
            <option value={value} key={i}>{value}</option>
          ))
        }
      </select>

    </div>
  )
}

export default Dropdown