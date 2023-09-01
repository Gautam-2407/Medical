import React from 'react'
import { Link } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, CalendarDays, MessageCircle, Settings } from "lucide-react";
import './sideheader.css';

function Sideheader() {
  return (
    <div className="side-header" id="side">
      <div className="side-header-wrapper">
        <LayoutDashboard size={20} color="#565657" strokeWidth={1.5} />
        <Link to="/dashboard" id="links">Dashboard</Link>
      </div>
      <div className="side-header-wrapper">
        <ClipboardList size={20} color="#565657" strokeWidth={1.5} />
        <Link to="/Report" id="links">Reports</Link>
      </div>
      <div className="side-header-wrapper">
        <CalendarDays size={20} color="#565657" strokeWidth={1.5} />
        <Link to="/calander" id="links">Calander</Link>
      </div>
      <div className="side-header-wrapper">
        <MessageCircle size={20} color="#565657" strokeWidth={1.5} />
        <Link to="/chat" id="links">Chat</Link>
      </div>
      <div className="side-header-wrapper">
        <Settings size={20} color="#565657" strokeWidth={1.5} />
        <Link to="/settings" id="links">Settings</Link>
      </div>
    </div>
  )
}

export default Sideheader
