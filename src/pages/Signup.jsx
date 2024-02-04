import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/signup.css";
import bgimg from "../assets/img/signupbg.jpg";
import Checkbox from "../components/Checkbox";
import HomeLoading from "../components/HomeLoading/Loading";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showStep, setShowStep] = useState("stepone");
  const [showPassword, setShowPassword] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [authpageloading, setAuthpageloading] = useState(true);
  useEffect(() => {
    setTimeout(() => setAuthpageloading(false), 1000);
  }, []);
  if (authpageloading) {
    return <HomeLoading />;
  }

  const options = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Toggle show password & hide password
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleCheckbox = (isChecked) => {
    console.log("I just checked 9trocoder" + isChecked);
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
          {showStep === "stepone" && (
            <div className='signup-body-right'>
              <div className='signup-body-top'>
                <p>Step 1 of 2</p>
              </div>
              <p className='signup-body-top-title'>Create your account</p>
              <div className='signup-alternative-body'>
                <div className='signup-alternative'>
                  <FcGoogle />
                </div>
                <div className='signup-alternative'>
                  <IoLogoApple />
                </div>
              </div>

              <div className='signup-or-divider'>
                <div className='leftdivider' />
                <p className='or-divider'>Or</p>
                <div className='rightdivider' />
              </div>

              <p className='signup-alternative-email'>Sign up with email</p>
              <p className='signup-alternative-sign'>
                Already have an account?{" "}
                <span onClick={() => navigate("/signin")}>Sign in</span>
              </p>
              <div className='inputForm'>
                <input
                  type='text'
                  className='input'
                  placeholder='Email Address'
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
              <button
                onClick={() => setShowStep("steptwo")}
                className='signupnextbtn'
              >
                Next
              </button>
            </div>
          )}
          {showStep === "steptwo" && (
            <div className='signup-body-right'>
              <div className='signup-body-top'>
                <p>Step 2 of 2</p>
              </div>
              <p className='signup-body-top-title'>Create your account</p>

              <p className='signup-alternative-sign-steptwo'>
                Already have an account?{" "}
                <span onClick={() => navigate("/signin")}>Sign in</span>
              </p>

              <div className='inputForm'>
                <input
                  type='text'
                  className='input'
                  placeholder='Name'
                  autoFocus={true}
                />
              </div>

              <p className='signup-steptwo-date'>Date of birth</p>
              <p className='signup-steptwo-date-info'>
                This will not be shown publicly. Confirm your own age, even if
                this account is for business, a pet, or something else.
              </p>

              <div className='signup-steptwo-date-form'>
                <div className='signup-steptwo-date-form-left'>
                  <div className='ssdfll'>
                    <div className='flex-column'>
                      <label htmlFor=''>Month</label>
                    </div>
                    <div className='selection-input-container'>
                      <div className='inputForm'>
                        <input
                          className='input selectioninput'
                          value={selectedOption}
                          onClick={toggleOptions}
                          placeholder={selectedOption || ""}
                          readOnly
                        />

                        <RiArrowDropDownLine />
                      </div>
                      {showOptions && (
                        <>
                          <div
                            className='selection-overlay'
                            onClick={toggleOptions}
                          />
                          <div className='selection-options'>
                            {options.map((option) => (
                              <label
                                key={option}
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </label>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className='ssdflr'>
                    <div className='flex-column'>
                      <label htmlFor=''>Year</label>
                    </div>
                    <div className='inputForm'>
                      <input type='number' className='input' placeholder='' />
                    </div>
                  </div>
                </div>
                <div className='signup-steptwo-date-form-right'></div>
              </div>

              <div className='signup-steptwo-check'>
                <Checkbox onChange={handleCheckbox} />
                <p className='signup-check-content'>
                  By clicking Create account, I agree that I have read and
                  accepted the <span>Terms of Use </span>and{" "}
                  <span>Privacy Policy</span>
                </p>
              </div>

              <button className='signupnextbtn'>Create account</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
