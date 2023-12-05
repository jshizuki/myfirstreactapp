import React, { useState } from 'react';
import { Button as MuiButton } from '@mui/material';
import './Button.css';

// Q1. ボタンAをクリックすると、countされた回数が表示されるようにしてください。

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="container">
      <div className="button-container">
        <p>How many times have you clicked?</p>
        <MuiButton variant="contained" color="primary" onClick={handleClick}>{count} times</MuiButton>
      </div>
    </div>
  )
}

export default Button;
