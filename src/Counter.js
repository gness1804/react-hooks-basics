import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
      setCount(count + 1);
  }

  return (
    <>
      <button onClick={incrementCount}>Click Me</button>
      <p>I was clicked {count} times.</p>
    </>
  );
}

export default Counter;
