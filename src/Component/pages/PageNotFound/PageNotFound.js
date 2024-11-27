import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="notfound-container">
    <div className="notfound-content">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="notfound-button">Go to Home</Link>
    </div>
  </div>
  )
}

export default PageNotFound
