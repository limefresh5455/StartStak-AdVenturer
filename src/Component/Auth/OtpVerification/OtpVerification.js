import React from 'react'
import './OtpVerification';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
 
  return (
    <div>
      <h1>OtpVerification</h1>
    </div>
  )
}

export default OtpVerification
