import React from 'react';
import './Instructions.css'; // Create a CSS file for the styles
import { useNavigate } from 'react-router-dom';

function Instructions() {
    const navigate=useNavigate();
    const func=()=>{
        navigate('/interface');
        return null;
    }
  return (
    <div className="instructions-container">
      <div className="instructions-header">
        <h2>Instructions</h2>
      </div>
      <div className="instructions-content">
        <ul>
          <li>Welcome to Online Mock Test</li>
          <li>Exam has Total 20 Questions</li>
          <li>Total Time for Exam is 30 Minutes</li>
          <li>Negative Marking Exam: <strong>No</strong></li>
        </ul>
        <p className="good-luck">Best of Luck for your Exam</p>
      </div>
      <div className="instructions-footer">
        <button className="start-button" onClick={func}>Start</button>
      </div>
    </div>
  );
}

export default Instructions;
