import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="App">
      <h1>Login User</h1>
      {message === 'Welcome, user!'? (
        <p id="message" style={{ color: message === 'Welcome, user!' ? 'green' : 'red' }}>{message}</p>
      ) : (
        <div className="login-container">
          <p id="message" style={{ color: message === 'Welcome, user!' ? 'green' : 'red' }}>{message}</p>
          <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
