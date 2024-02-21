import { useState } from "react";
import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import "../css/login.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.email);
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    await signOut(auth, email, password);
  }

  return (
    <div className="login-container">
      <div className="left-box">
        <img src="images/buspng.png" alt="Logo" />

        <h1>Student Bus Partner Administrator</h1>
      </div>
      <div className="right-box">
        <h2>Sign into your account</h2>
        <label for="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label for="password">Password:</label>
        <div className="password-container">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="eye-icon" onclick="togglePasswordVisibility()">
            <i className="far fa-eye" id="togglePassword"></i>
          </div>
        </div>
        <button className="login-button" onClick={signIn}>
          Sign In
        </button>

        <div className="forgot-password">
          <a href="your_forgot_password_url">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
