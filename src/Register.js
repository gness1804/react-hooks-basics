import React, { useState } from 'react';
import styles from './styles';

const Register = () => {
  const initFormState = {
    username: '',
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initFormState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setForm(initFormState);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!form.username || !form.password) {
      alert('Error: you must enter a username and a password.');
      return;
    }
    setUser({
      ...form,
      createdAt: Date.now(),
    });
    resetForm();
  };

  return (
    <>
      <div style={styles.Register.registerFormContainer}>
        <form style={styles.Register.registerFormBody} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <button type="submit">Click</button>
        </form>
      </div>
      {user ? (
        <p>Logged in as: {user.username}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </>
  );
};

export default Register;
