import React, { useState } from "react";
import Header from "../components/Header.jsx";
// CSS import is removed as it is being handled in app.jsx
import Footer from "../components/Footer.jsx";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here

  };

  return (
    <>
      <Header />
      <div className="hero">
        <img src="\hero_image.jpeg" alt="Auction Event" />
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Register</h2>
          <div className="formGroup">
            <label className="label" htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="Enter a new username"
            />
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
