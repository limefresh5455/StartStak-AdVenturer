import React, { useEffect, useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { signInValidation } from "../Validation/Validation";
import { LoginService } from "../Service/Service";
import { useAuth } from "../../../ContextApi/AuthContext/AuthContext";
 
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { setUsers } = useAuth();
  const userData = localStorage.getItem("user_Data");

  useEffect(() => {
    if (userData) {
      navigate("/chatBot");
    }
  }, [navigate]);

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
      const validation = await signInValidation(formData);
      setErrors(validation);
      if (Object.keys(validation).length === 0) {
        const response = await LoginService(formData);
        if (response.status === 200 || response.status === 201) {
          console.log("User logged in successfully");
          const { access_token, refresh, user } = response.data;
          const combinedData = { access_token, refresh, user };
          localStorage.setItem("user_Data", JSON.stringify(combinedData));
          setUsers(combinedData);
          setFormData({ email: "", password: "" });
          navigate("/chatBot");
        }
      }
    } catch (error) {
      console.log("Error during login form submission:", error);
    }
  };

  return (
    <div className="login-container">
     <img src="/assets/img/vector.png" alt="StartStak Logo" className="logo" />
      <div className="mainContainer-Login">
      <div className="logo-section">
        <h1 className="title">StartStak AdVenturer</h1>
        <p className="tagline">
          Develop ad content aligned to your buyers in hours, not weeks
        </p>
      </div>
      <div className="form-box">
        <h2>Log In</h2>
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
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? "error-input" : ""}
              autoComplete="new-password"
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <Link to="/forgotPassword" className="forgot-password">
            Forgot password?
          </Link>
          <button type="submit" className="login-button-submit">
            Log In
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
