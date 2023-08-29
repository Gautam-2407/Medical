import React from 'react'
import './calander.css';

function Headerone() {
  return (
    <div className="headerone">
    <div className="headerone-start">
    <p>Check Your </p>
    <h2>Overall Health</h2>
    </div>
    <div className="headerone-center">
      <p>Month</p>
      <h4>August</h4>
    </div>
    <div className="headerone-end">
      <div className="headerone-end1">
        <p>Sun</p>
        <h4>01</h4>
      </div>
      <div className="headerone-end1">
        <p>Mon</p>
        <h4>02</h4>
      </div>
      <div className="headerone-end1">
        <p>Tue</p>
        <h4>03</h4>
      </div>
      <div className="headerone-end1">
        <p>Web</p>
        <h4>04</h4>
      </div>
      <div className="headerone-end1">
        <p>Thu</p>
        <h4>05</h4>
      </div>
      <div className="headerone-end1">
        <p>Fri</p>
        <h4>06</h4>
      </div>
      <div className="headerone-end1">
        <p>Sat</p>
        <h4>07</h4>
      </div>
    </div>
  </div>
  )
}

export default Headerone;
