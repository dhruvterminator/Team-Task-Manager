import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [role, setRole] = useState('member');

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      role,
    };

    localStorage.setItem(
      'user',
      JSON.stringify(userData)
    );

    alert('Registration Successful');

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
        onSubmit={handleRegister}
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
          Register
        </h1>

        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
          }}
        />

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

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
          }}
        >
          <option value='member'>
            Member
          </option>

          <option value='admin'>
            Admin
          </option>
        </select>

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;