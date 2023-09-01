import React from 'react'
import Header from '../../components/header/Header';
import Calander from '../../components/calander/Calander';
import Bodytest from '../../components/bodytests/Bodytest';
import Bodypart from '../../components/bodypart/Bodypart';
import Home from '../../components/home/Home';    
import Sideheader from  '../../components/Sideheader/Sideheader';
import './dashboard.css'
function Dashboard() {
  return (<>
  <div className="dashboard"> 
    <div className="header">
      <Header />
    </div>
    <div className="sideheader">
      <Sideheader />
    </div>
    <div className="calander">
        < Calander />
    </div>
    <div className="bodytest-dask">
        <div className="bodytest-db">
        < Bodytest />
        </div>
        <div className="bodypart-db">
        <Bodypart /> 
        </div>
        <div className="home-db">
           <Home />
        </div>
    </div>
    </div>
  
    </>
  )
}

export default Dashboard;
