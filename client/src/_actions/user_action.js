import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(data) {
  const response = axios
    .post('/api/users/login', data)
    .then((res) => res.data)
    .catch((err) => err);
  console.log(response);
  return {
    type: LOGIN_USER,
    payload: response,
  };
}
