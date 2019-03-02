import React, { useState, useEffect } from 'react';
import styles from './styles';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
    window.addEventListener('mousemove', handleMouseMove);

    // clean up function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

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

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
    </>
  );
};

export default Counter;
