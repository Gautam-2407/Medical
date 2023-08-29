import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (

    <div className='home-container'>
          <div className='home-all'>
            <Link to="all" id="all">All</Link>
            <Link to="test"id="all">Test</Link>
            <Link to="docs" id="all">Docs</Link>
            <Link to="advice" id="all">Advice</Link>
            <Link to="labs" id="all">Labs</Link>
          </div>
        </div>
  )
}

export default Home;
