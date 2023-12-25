// LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@') || !email.includes('.com')) {
      alert('Invalid email format');
      return;
    }

    // Your login logic here

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col justify-center mt-40 items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl">Login</h1>
        <div className="m-4">
          <label htmlFor="username">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email"
            type="text"
          />
        </div>
        <div className="m-4">
          <label htmlFor="password">Password</label>
          <input
            className="border border-black round-md"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            type="password"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
