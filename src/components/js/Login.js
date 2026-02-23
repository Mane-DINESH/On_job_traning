import React, { useState } from "react";
import "../css/Login.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ===== Login Handler =====
  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(loginEmail)) {
      alert("Please enter a valid email!");
      return;
    }

    if (!loginPassword) {
      alert("Password cannot be empty!");
      return;
    }

    // Check for admin
   if (loginEmail === "dinesh@gmail.com") {
  alert("Welcome Admin!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "/admin";
} else {
  alert("Welcome User!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "/";
}


    // Clear fields after login
    setLoginEmail("");
    setLoginPassword("");
  };

  // ===== Register Handler =====
  const handleRegister = (e) => {
    e.preventDefault();

    if (!registerName) {
      alert("Full Name is required!");
      return;
    }

    if (!isValidEmail(registerEmail)) {
      alert("Please enter a valid email!");
      return;
    }

    if (registerPassword.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    alert("Registration successful!");
    // You can add API call to save user here

    // Clear fields after registration
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setIsLogin(true); // switch back to login
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isLogin ? "" : "right-panel-active"}`}>

        {/* Login Form */}
        <div className="form-container login-container">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              
            />
            <button type="submit">Login</button>
            <p>
              Don't have an account? <span onClick={toggleForm}>Register</span>
            </p>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-container register-container">
          <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              
            />
            <button type="submit">Register</button>
            <p>
              Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
