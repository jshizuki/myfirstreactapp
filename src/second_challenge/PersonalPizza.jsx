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
        return [clickedItem, ...prev]
      })
    }
  }

  return (
    <div className="pizza-container">
      <p>Second challenge - updating an array in a state</p>
      {options.map(option => {
        return <MuiButton variant="contained" color="secondary" className="button" value={option} onClick={toggleTopping}>{option}</MuiButton>
      })}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  )
}
