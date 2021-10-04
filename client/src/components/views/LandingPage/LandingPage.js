import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function LandingPage(props) {
  const [isAuth, setIsAuth] = useState('');
  const user = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get('/api/users/logout')
      .then((response) => {
        console.log(response);
        if (response.data.logoutSuccess) {
          props.history.push('/login');
        } else {
          alert('Logout Failed!');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    props.history.push('/login');
  };

  useEffect(() => {
    if (user.userInfo) {
      setIsAuth(user.userInfo.isAuth);
    }
  }, [user.userInfo]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      LandingPage
      {isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default withRouter(LandingPage);
