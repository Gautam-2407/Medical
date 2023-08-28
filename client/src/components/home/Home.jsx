import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (

    <div className='home-container'>
          <div className='home-all'>
            <Link to="all" id="all">All</Link>
            <Link to="test"id="test">Test</Link>
            <Link to="docs" id="docs">Docs</Link>
            <Link to="advice" id="advice">Advice</Link>
            <Link to="labs" id="labs">Labs</Link>
          </div>
        </div>
  )
}

export default Home;
