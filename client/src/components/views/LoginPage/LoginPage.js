import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    dispatch(loginUser(data)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push('/');
      } else {
        alert(response.payload.msg);
      }
    });
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

export default withRouter(LoginPage);
