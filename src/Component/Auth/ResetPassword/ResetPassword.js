import React, {useState } from "react";
import './ResetPassword.css';
import { useLocation, useNavigate } from "react-router-dom";
import {  ResetPasswordValidation } from "../Validation/Validation";
import {  ResetPasswordService } from "../Service/Service";
 
 
function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ password: "",confirmPassword:""});
  const [errors, setErrors] = useState({});
  const email = location.state?.email;
  console.log(email)
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
      const validation = await ResetPasswordValidation(formData);
      setErrors(validation);
      if (Object.keys(validation).length === 0) {
        const payload = { ...formData, email };
          const response = await ResetPasswordService(payload);
          if (response.status === 200 || response.status === 201) {
            setFormData({password: "",confirmPassword:""});
            navigate("/");
          }
      }
    } catch (error) {
      console.log("Error during reset password form submission:", error);
    }
  };

  return (
    <div className="Reset-container">
      <img src="vector.png" alt="StartStak Logo" className="logo" />
      <div className="mainContainer-Reset">
      <div className="logo-section">
        <h1 className="title">StartStak AdVenturer</h1>
        <p className="tagline">
          Develop ad content aligned to your buyers in hours, not weeks
        </p>
      </div>
      <div className="form-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? "error-input" : ""}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? "error-input" : ""}
            />
          </div>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          <button type="submit" className="login-button">
            Change Password
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ResetPassword;