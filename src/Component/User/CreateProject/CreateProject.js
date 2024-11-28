import React from 'react'
import './CreateProject.css'

const CreateProject = () => {
  return (
    <div className="CreateProject-container">
      {/* Header with Logo */}
      <header className="header">
        <img src="/assets/img/Vector.png" alt="StartStak Logo" className="logo" />
      </header>

      {/* Centered Content */}
      <div className="content">
        <h1>Welcome!</h1>
        <p>Get started by creating a new project below</p>
        <button className="btn">+ Create New Project</button>
      </div>
    </div>
  )
}

export default CreateProject
