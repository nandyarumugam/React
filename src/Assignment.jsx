import React from 'react';
import './Assignment.css';
import { useNavigate } from 'react-router-dom';

export default function Assignment() {
  const navigate = useNavigate();

  return (
    <div className="assignment-page full-screen">
      <div className="assignment-container card">
        <h1 className="title">Welcome !!</h1>
        <p className="subtitle"> This is your assignment dashboard.</p>

        <h2 className="section-title">Assignments</h2>
        <div className="assignment-buttons-vertical">
          <button onClick={() => navigate('/assignment1')}>Investment Component</button>
          <button onClick={() => navigate('/assignment2')}>RD Plan Creation</button>
          <button onClick={() => navigate('/assignment3')}>React Router</button>
          <button onClick={() => navigate('/assignment4')}>Event Handling</button>
          <button onClick={() => navigate('/assignment5')}>Redux State Management</button>

        </div>
      </div>
    </div>
  );
}
