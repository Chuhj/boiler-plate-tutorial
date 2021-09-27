import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleFormSubmit}
      >
        <label>Email :</label>
        <input type="text" value={email} onChange={handleChangeEmail} />
        <label>Password :</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
