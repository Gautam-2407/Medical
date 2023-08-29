import React from 'react'
import { Link } from 'react-router-dom'
import './bodytest.css';

function Bodytest() {
  return (
    <div className="bodytest-container">
      <div className="bodytest">
    <Link to="heart" id="heart">Heart</Link>
    <Link to="lungs" id="heart">Lungs</Link>
    <Link to="head" id="heart">Head</Link>
    <Link to="legs" id="heart">Legs</Link>
    <Link to="stomach" id="heart">Stomach</Link>
    <Link to="eyes" id="heart">Eyes</Link>
    <Link to="dna" id="heart">DNA</Link>
    </div>
  </div>
  )
}

export default Bodytest
