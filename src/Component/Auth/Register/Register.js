import React, { useEffect, useState } from "react";
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { signUpValidation } from "../Validation/Validation";
import { signUpService } from "../Service/Service";


function Register() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({ name: "",  number: "", email: "",  password: ""});
  const [errors, setErrors] = useState({});
  const userData = localStorage.getItem("user_Data");
   
  useEffect(() => {
    if (userData) {
      navigate("/chatBot");
    }
  }, [navigate]);
 
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const validation= await signUpValidation(formData)
      setErrors(validation);
      if(Object.keys(validation).length === 0){
       const response = await signUpService(formData)
       if(response.status == 200 || response.status == 201){
          console.log("user Signup Successfully")
          setFormData({ name: "",  number: "", email: "",  password: "" });
       }
      }
    }catch(error){
      console.log("Error during  signUp form submission:", error)
    }
  };
 

  return (
    <div className="register-container">
      <img src="vector.png" alt="StartStak Logo" className="logo" />
    <div className="mainContainer-register">
      <div className="logo-section">
        <h1 className="title">StartStak AdVenturer</h1>
        <p className="tagline">
          Develop ad content aligned to your buyers in hours, not weeks
        </p>
      </div>
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name "
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "error-input" : ""}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "error-input" : ""}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
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
          {/* <Link to="/forgotPassword" className="forgot-password">
            Forgot password?
          </Link> */}
          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="number"
              placeholder="Enter your mobile Number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className={errors.number ? "error-input" : ""}
            />
          </div>
          {errors.number && <p className="error">{errors.number}</p>}
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}
 
export default Register
