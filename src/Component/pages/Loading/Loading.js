import React from 'react';
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex-center">
    <div className="spinner-container">
      <div className="spinner-bg"></div>
      <div className="spinner"></div>
    </div>
  </div>
  )
}

export default Loading
