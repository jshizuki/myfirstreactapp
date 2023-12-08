import React, { useState } from 'react';
import { options } from './options';
import { Button as MuiButton } from '@mui/material';
import './PersonalPizza.css';

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = (e) => {
    const clickedItem = e.target.value

    if (selected.includes(clickedItem)) {
      setSelected(prev => {
        return prev.filter(item => item !== clickedItem)
      })
    } else {
      setSelected(prev => {
        // Replacing current array with a new one with the updated element
        return [clickedItem, ...prev]
      })
    }
  }

  return (
    <div className="pizza-container">
      <p>Second challenge - updating an <b>array</b> in a state</p>
      {options.map((option, index) => {
        return <MuiButton variant="contained" color="secondary" className="button" key={index} value={option} onClick={toggleTopping}>{option}</MuiButton>
      })}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  )
}
