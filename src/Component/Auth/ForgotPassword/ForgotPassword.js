import React, {useState } from "react";
import './ForgotPassword.css';
import { Link, useNavigate } from "react-router-dom";
import { FotgotPasswordValidation } from "../Validation/Validation";
import {  FotgotPasswordService } from "../Service/Service";
 
 
function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: ""});
  const [errors, setErrors] = useState({});
//   const userData = localStorage.getItem("user_Data");

//   useEffect(() => {
//     if (userData) {
//       navigate("/chatBot");
//     }
//   }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",  
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validation = await FotgotPasswordValidation(formData);
      setErrors(validation);
      if (Object.keys(validation).length === 0) {
        const response = await FotgotPasswordService(formData);
        if (response.status === 200 || response.status === 201) {
          setFormData({email: ""});
          navigate("/otpVerification", { state: { email: formData.email } });
        }
      }
    } catch (error) {
      console.log("Error during forgot password form submission:", error);
    }
  };

  return (
    <div className="ForgotPassword-container">
      <img src="/assets/img/vector.png" alt="StartStak Logo" className="logo" />
      <div className="mainContainer-ForgotPassword">
      <div className="logo-section">
        <h1 className="title">StartStak AdVenturer</h1>
        <p className="tagline">
          Develop ad content aligned to your buyers in hours, not weeks
        </p>
      </div>
      <div className="form-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "error-input" : ""}
              autoComplete="email"
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <button type="submit" className="forgot-password-button">
            Forgot Password
          </button>
        </form>
        <p className="back-to-login">
         Back To Login?{" "}
        <Link to="/" className="back-to-login-link">
          Log In
        </Link>
       </p>
      </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
