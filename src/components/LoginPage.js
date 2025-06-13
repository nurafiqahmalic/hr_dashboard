import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);

    // After successful login, navigate to Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFF2F2] bg-fixed relative overflow-hidden font-roboto">
      {/* Glass Effect Login Container */}
      <div className="bg-white bg-opacity-100 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96 z-10">
        <h2 className="text-3xl font-semibold text-center text-[#608BC1] mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#608BC1]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-[#A9B5DF] rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#608BC1]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-3 border border-[#A9B5DF] rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#608BC1] text-white rounded-lg hover:bg-[#1F2647] transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-[#608BC1]">
            Don't have an account?{' '}
            <a href="/register" className="text-[#A9B5DF]">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Dark bottom section */}
      <div className="absolute bottom-0 w-full h-1/2 bg-[#608BC1]"></div>
    </div>
  );
};

export default LoginPage;
