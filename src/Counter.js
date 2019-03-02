import React, { useState } from 'react';
import styles from "./styles";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>Click Me</button>
      <p>I was clicked {count} times.</p>

      <h2>Toggle Light</h2>
      <img
          onClick={toggleLight}
          style={styles.Counter.lightbulbImage}
          alt="Flashlight"
          src={isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'}
      />
    </>
  );
}

export default Counter;
