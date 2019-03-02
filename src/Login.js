import React, { useState } from 'react';
import styles from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const clearInputs = () => {
    setUsername('');
    setPassword('');
  };

  const handleUpdateUsername = event => {
    setUsername(event.target.value);
  };

  const handleUpdatePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // normally we would validate user entries against an external API.
    // here, we just will assign the username and password to a user state property
    // and display the username on the page after login.
    const userData = {
      username,
      password,
      createdAt: Date.now(),
    };
    setUser(userData);
    clearInputs();
  };

  return (
    <div style={styles.Login.loginFormContainer}>
      <form style={styles.Login.loginFormBody} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleUpdateUsername}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleUpdatePassword}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>

      {user ? (
        <p>Your username is: {username}.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Login;
