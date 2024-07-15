import React, { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles.css"; // Import the CSS file
import Footer from "../components/Footer.jsx";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <Header />
      <div className="hero">
        <img src="\hero_image.jpeg" alt="Auction Event" />
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="formGroup">
            <label className="label" htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Enter your username"
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
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
