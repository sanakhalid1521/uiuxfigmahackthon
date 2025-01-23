'use client'
import React, { useState } from "react";
import Image from "next/image";

const Account = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  // Handle Login Form Change
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Handle Register Form Change
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // Handle Login Form Submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username || !password) {
      setLoginError("Please fill in all fields.");
      return;
    }

    // Simulate login (In a real scenario, you would use an API to authenticate)
    if (username === "user@example.com" && password === "password123") {
      setLoginError("");
      alert("Login successful");
      // Redirect or update state
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  // Handle Register Form Submission
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = registerData;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Simulate registration (In a real scenario, you would use an API to register the user)
    setRegisterMessage("A link to set a new password will be sent to your email address.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="w-full h-[316px] relative">
        <Image
          src="/acc.png" // Replace with your actual banner image URL
          alt="My Account Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"></div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Log In Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-black">Log In</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-black">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-black"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-black">
                Remember me
              </label>
            </div>
            {loginError && <div className="text-red-500 text-sm mb-4">{loginError}</div>}
            <button
              type="submit"
              className="w-32 py-1 px-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Log In
            </button>
            <div className="mt-4 text-sm text-black">
              <a href="#" className="text-yellow-500 hover:underline">
                Lost Your Password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-black">Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-black"
              />
            </div>
            {registerMessage && <div className="text-green-500 text-sm mb-4">{registerMessage}</div>}
            <p className="text-sm text-black mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <button
              type="submit"
              className="w-32 py-1 px-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
