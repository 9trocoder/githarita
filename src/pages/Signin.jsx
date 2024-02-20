import React, { useEffect, useState } from "react";
import bgimg from "../assets/img/signinbg.jpg";
import HomeLoading from "../components/HomeLoading/Loading";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signin() {
  let navigate = useNavigate();
  const [authpageloading, setAuthpageloading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setTimeout(() => setAuthpageloading(false), 1000);
  }, []);
  if (authpageloading) {
    return <HomeLoading />;
  }

  const handleTogglePassword = () => {
    if (password.length === 0) {
      setShowPassword(false);
    } else {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  return (
    <div className='signup-container'>
      <div
        className='signup-overlay'
        style={{ backgroundImage: `url(${bgimg})` }}
      />
      <div className='signup-body'>
        <div className='signup-body-container'>
          <div className='signup-body-left'>
            <p className='signup-body-logo'>Githarita</p>
          </div>
          <div className='signup-body-right'>
            <p className='signup-body-top-title'>Sign in</p>
            <p className='signup-alternative-sign-steptwo'>
              New user?{" "}
              <span onClick={() => navigate("/")}>Create an account</span>
            </p>
            <div className='inputForm'>
              <input
                type='text'
                className='input'
                placeholder='Email address'
              />
            </div>
            <div className='inputForm'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder='Password'
                onChange={handlePasswordChange}
                className='input'
              />
              {showPassword ? (
                <FiEye
                  className='show-password'
                  onClick={handleTogglePassword}
                />
              ) : (
                <FiEyeOff
                  className='hide-password'
                  onClick={handleTogglePassword}
                />
              )}
            </div>
            <button className='signupnextbtn' onClick={() => navigate("/home")}>
              Sign in
            </button>
            <div className='signup-or-divider'>
              <div className='leftdivider' />
              <p className='or-divider'>Or</p>
              <div className='rightdivider' />
            </div>
            <div className='signup-alternative-body'>
              <div className='signup-alternative'>
                <FcGoogle />
              </div>
              <div className='signup-alternative'>
                <IoLogoApple />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
