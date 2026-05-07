import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
    };

    localStorage.setItem(
      'user',
      JSON.stringify(userData)
    );

    localStorage.setItem(
      'token',
      'demo-token'
    );

    alert('Login Successful');

    window.location.href = '/';
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
          boxShadow:
            '0px 4px 10px rgba(0,0,0,0.1)',
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
          required
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
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
          }}
        />

        <button
          type='submit'
          style={{
            width: '100%',
            padding: '12px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;