import React from 'react'
import { Link } from 'react-router-dom'
import './bodytest.css';

function Bodytest() {
  return (
    <div className="bodytest-container">
      <div className="bodytest">
    <Link to="heart" id="heart">Heart</Link>
    <Link to="lungs" id="lungs">Lungs</Link>
    <Link to="head" id="head">Head</Link>
    <Link to="legs" id="legs">Legs</Link>
    <Link to="stomach" id="stomach">Stomach</Link>
    <Link to="eyes" id="eyes">Eyes</Link>
    <Link to="dna" id="dna">DNA</Link>
    </div>
  </div>
  )
}

export default Bodytest
