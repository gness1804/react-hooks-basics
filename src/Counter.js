import React, { useState, useEffect } from 'react';
import styles from './styles';

const Counter = () => {
  const initialLocation = {
    latitude: null,
    longitude: null,
    speed: null,
  };
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [amIOnline, setOnlineStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocation,
  );
  let mounted = false;

  const handleMouseMove = event => {
    if (mounted) {
      setMousePosition({
        x: event.pageX,
        y: event.pageY,
      });
    }
  };

  const handleOnlineStatus = () => {
    setOnlineStatus(true);
  };

  const handleOfflineStatus = () => {
    setOnlineStatus(false);
  };

  const handleGeolocation = position => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      speed: position.coords.speed,
    });
  };

  const handleGeolocationError = err => {
    throw new Error(
      `Error with geolocation: ${err.message || JSON.stringify(err)}`,
    );
  };

  useEffect(() => {
    mounted = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);
    navigator.geolocation.getCurrentPosition(
      handleGeolocation,
      handleGeolocationError,
    );
    const watchId = navigator.geolocation.watchPosition(
      handleGeolocation,
      handleGeolocationError,
    );

    // clean up function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, []);

  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
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
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
      />

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />

      <h2>Am I Online?</h2>
      <strong>{amIOnline ? 'Yes!' : 'Nope.'}</strong>

      <h2>Where Am I?</h2>
      <p>
        I am at {latitude || 'no latitude'}, {longitude || 'no longitude'},
        traveling at {speed || 'no speed!'}
      </p>
    </>
  );
};

export default Counter;
