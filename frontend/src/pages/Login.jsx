import React, { useState } from 'react';

import API from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', {
        email,
        password,
      });

      localStorage.setItem(
        'user',
        JSON.stringify(res.data)
      );

      alert('Login Successful');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f1f5f9',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          width: '350px',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>
          Login
        </h1>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
          }}
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
          }}
        />

        <button
          style={{
            width: '100%',
            padding: '12px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;