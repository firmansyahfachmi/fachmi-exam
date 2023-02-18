
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import ProfileImg from "public/circle-profile.png";

import { validatePassword } from './utils/validatePasswords';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  
  const handlePasswordChange = (event) => {
    const newErrorMessage = validatePassword(event.target.value);
    setPassword(event.target.value);
    setErrorMessage(newErrorMessage);
}
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <>
    <Head>
        <title>Fachmi - Login</title>
      </Head>
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="box-image">
            <Image src={ProfileImg} width="100" height="100" alt="" />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="username"
              className="input"
              value={username}
              onChange={handleUsernameChange}
              required
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Password"
            />
            {errorMessage && <p className="error-msg">{errorMessage}</p>}
          </div>
          
          <div className="form-group">
            <input
              type="checkbox"
              id="rememberMe"
              className="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>

            <button
              type="button"
              className="forgot-password-button"
              onClick={handleForgotPassword}
            >
             <Link href={"/forgot-password"}> <i> Forgot Password?</i></Link>
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </div>
          <div className="forgot-password">
            Dont have account? <Link href="/register"><span className="register-link">Register</span></Link>
          </div>
        </form>
      </div>
    </>
  );
}
