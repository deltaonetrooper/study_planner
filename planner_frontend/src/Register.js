import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password1 !== password2) {
        setError("Passwords don't match");
        return;
    }

    try {
        // 1) skrá notandann
        await axios.post('http://localhost:8000/api/auth/registration/', {
        username,
        email,
        password1,
        password2,
        });

        // 2) skrá sjálfkrafa inn eftir skráningu
        const response = await axios.post('http://localhost:8000/api/auth/login/', {
        username,
        password: password1,
        });

        const token = response.data.token;
        localStorage.setItem('authToken', token);

        // 3) benda á aðalsíðuna
        navigate('/master');
    } catch (err) {
        if (err.response && err.response.data) {
        const data = err.response.data;

        if (data.username) setError(`Username: ${data.username.join(' ')}`);
        else if (data.password1) setError(`Password: ${data.password1.join(' ')}`);
        else setError('Registration failed');
        } else {
        setError('Registration failed');
        }
    }
    };


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        /><br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        /><br/>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default Register;
