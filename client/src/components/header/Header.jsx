import React from 'react';
import './header.css';
import { LayoutDashboard } from 'lucide-react-icons';

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h1>Medical Magic</h1>
      </div>
      <div className="header-center">
        <div className="header-one">
      <LayoutDashboard color="#ffffff" />
      </div>
      </div>
    </div>
  )
}

export default Header;
