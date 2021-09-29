import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmsetPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmsetPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호 다름');
    }
    const data = { name, email, password };

    dispatch(registerUser(data)).then((response) => {
      if (response.payload.success) {
        props.history.push('/login');
      } else {
        alert('Register Failed!');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>Email</label>
        <input type="text" onChange={handleChangeEmail} required />
        <label>Name</label>
        <input type="text" onChange={handleChangeName} required />
        <label>Password</label>
        <input
          type="password"
          onChange={handleChangePassword}
          minLength="5"
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChangeConfirmPassword}
          minLength="5"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
