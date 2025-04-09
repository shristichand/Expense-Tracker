import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState(''); // Changed from email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://6745d15f512ddbd807f9ce04.mockapi.io/Users', {
        username,  // Changed from email to username
        password,
      });

      // Check if the user exists with the correct credentials
      if (response.data) {
        navigate('/dashboardpage'); // Redirect to dashboard on successful login
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Error logging in, please try again.', error);
    }
  };

  const handlesignclick = () => {
    navigate('/signup'); // Redirect to signup page on clicking Sign Up link
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo and Header */}
        <div className="flex place-content-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700">E-Tracker</h1>
        </div>

        {/* Login Form */}
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Login to Expense Tracker</h2>
        <p className="text-sm text-gray-500 mb-4">
          Don’t have an account yet?{" "}
          <a href="#" className="text-green-500 hover:underline" onClick={handlesignclick}>
            Sign Up here!
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Handle username change
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-6 text-right">
            <a href="#" className="text-sm text-green-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            Login to Tracker
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-sm text-gray-500">or login via</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Login */}
        <div>
          <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495V14.708h-3.14v-3.63h3.14V8.327c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.099 2.796.143v3.24h-1.918c-1.504 0-1.796.714-1.796 1.76v2.308h3.593l-.468 3.63h-3.125V24h6.125c.73 0 1.325-.595 1.325-1.326V1.326C24 .595 23.406 0 22.675 0z" />
            </svg>
            Sign In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
