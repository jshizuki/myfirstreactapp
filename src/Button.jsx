import React, { useState } from 'react';

// Q1. ボタンAをクリックすると、countされた回数が表示されるようにしてください。

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>How many times have you clicked?</p>
      <button onClick={handleClick}>{count} times</button>
    </div>
  )
}

export default Button;
